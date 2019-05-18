<style>
	.ivu-tabs-nav {
		height: 28px;
		margin-top: 4px;
		margin-left: 4px;
	}

	.ivu-tabs-nav .ivu-tabs-tab{
		height: auto;
	}

	.ivu-tabs-bar {
		margin-bottom: 0px;
	}

	div.ivu-tabs-bar > div > div > div > div > div:nth-child(2) > i{
		display: none;
	}

	i.ivu-icon.ivu-icon-ios-arrow-back {
		margin-top: 10px;
	}

	i.ivu-icon.ivu-icon-ios-arrow-forward {
		margin-top: 10px;
	}

	.layout-iframe{
		width:100%; 
		height:300px;
		frameborder:no;
		border:0px;
		marginwidth:0px;
		marginheight:0px;
		allowtransparency:yes;
	}
</style>
<template>
		<div>
			<Tabs type="card" closable @on-tab-remove="handleTabRemove" :value="value" :animated="false">
				<Tab-pane :label="basedata.label"  name="index" v-if="showIndex">
					<iframe class="layout-iframe" :style="contentHeight" :src=basedata.base_url></iframe>
				</Tab-pane>
				<Tab-pane v-for="tab in tabs" :key="tab.id" :name="tab.id" :label="tab.name.title" v-if="tab.visable">
					<iframe class="layout-iframe" :style="contentHeight" :src="tab.name.url"></iframe>
				</Tab-pane>
			</Tabs>
		</div>
</template>
<script>
    export default {
    		props:{
    			height:0,
				basedata:null
    		},
    		computed:{
    			contentHeight: function(){
    				var h = (this.height - 32);
    				return {
    					height:h
    				};
    			}
    		},
            data () {
                return {
    				showIndex: true,
    				tabs:null,
    				value:'index',
					tab0: true,
					tab1: true,
					tab2: true
                }
            },
            methods: {
                handleTabRemove (name) {
    				if(name == 'index'){
    					this.showIndex = false;
    				}else{

    					for (var i=0; i<this.tabs.length; i++) {
    					   if(this.tabs[i].id == name){
    						  this.tabs[i].visable = false;
    					   }
    					}

    					for (var i=this.tabs.length; i>=0; i--) {
    					   if(this.tabs[i].visable == true){
    						  this.value = this.tabs[i].id;
    					   }
    					}

    				}
                },
    			selectSubActive(name,id) {
    				 var exist = false;
    				 for (var i=0; i<this.tabs.length; i++) {
    					if(this.tabs[i].id == id){
    						this.tabs[i].visable = true;
    						exist = true;
    					}
    				 }
    				 if(!exist){
    					var tmp = {
    						id: id,
    						name: name,
    						visable: true
    					};
    					this.tabs.push(tmp);
    				 }

    				 this.value = id;
    			}
            },
    		created() {
    		  this.tabs = new Array();
    		  this.$bus.on('selectSubActive', this.selectSubActive);
    		},
    		beforeDestroy() {
    		  this.$bus.off('selectSubActive', this.selectSubActive);
    		},
    		mounted: function(){

    		}
        }
</script>
