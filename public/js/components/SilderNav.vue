<style>

</style>
<template>
		<div>
			<Menu ref="leftMenu" theme="dark" width="300px" :open-names="open2" @on-select="subMenuClick">
                <Submenu v-for="item in content.submenu"
						 :key="content.Id+'-'+item.Id"
						 :name="content.Id+'-'+item.Id">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                       {{item.title}}
                    </template>
					<Menu-item  v-for="subitem in item.submenu"
								:key="content.Id+'-'+item.Id+'-'+subitem.Id"
								:name="content.Id+'-'+item.Id+'-'+subitem.Id">
						<Icon :type="subitem.icon"></Icon>
						{{subitem.title}}
					</Menu-item>
                </Submenu>

            </Menu>
		</div>
</template>
<script>

    export default {
		props:{
			content:null,
		},
		data: function() {
            return {
            }
        },
		mounted:function(){
			this.$nextTick(function() {
				this.$refs.leftMenu.updateOpened();
				this.$refs.leftMenu.updateActiveName();
			})
		},
		computed:{
			open2:function () {
				var open = new Array();
				for (var i in this.content.submenu){
					open.push(this.content.Id+'-'+this.content.submenu[i].Id);
				}
				return open;
			}
		},
		created() {
			this.$bus.on('selectNav', this.selectNav);
		},
		beforeDestroy() {
			this.$bus.off('selectNav', this.selectNav);
		},
		methods: {
			selectNav() {
				this.$nextTick(function() {
					this.$refs.leftMenu.updateOpened();
					this.$refs.leftMenu.updateActiveName();
				})
			},
			subMenuClick: function (name) {
				this.selectSubActive(name);
			},
			selectSubActive: function (name){
				var strs= new Array(); //定义一数组
				strs=name.split("-"); //字符分割
				if(strs.length >= 3){
					for (var i in this.content.submenu) {
						if(this.content.submenu[i].Id == strs[1]){
							for (var j in this.content.submenu[i].submenu){
								if(this.content.submenu[i].submenu[j].Id == strs[2]){
									this.$bus.emit('selectSubActive', this.content.submenu[i].submenu[j],name);
									break;
								}
							}
						}
					}

				}

			}
		}
    }
</script>
