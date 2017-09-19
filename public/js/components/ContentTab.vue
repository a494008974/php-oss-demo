<style>
	.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
		margin: 0;
		margin-right: 0px;
		height: 31px;
		padding: 5px 16px 4px;
		border: 1px solid #dddee1;
		border-bottom: 0;
		border-radius: 0px 0px 0 0;
		transition: all .3s ease-in-out;
		background: #f8f8f9;
	}

	.ivu-tabs-bar {
		border-bottom: 1px solid #dddee1;
		margin-bottom: 0px;
	}
	
	.layout-iframe{
		width:100%; 
		height:300;
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
				<Tab-pane label="首页"  name="index" v-if="showIndex">
					<iframe class="layout-iframe" :style="contentHeight" src="http://www.baidu.com"></iframe>
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
    				value:'index'
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
