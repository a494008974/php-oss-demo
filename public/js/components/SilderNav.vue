<style>

</style>
<template>
		<div>
			<Menu theme="dark" width="300px" :open-names="openNames" @on-select="subMenuClick">
                <Submenu v-for="item in content.submenu" :key="content.Id+'-'+item.Id" :name="content.Id+'-'+item.Id">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
						{{content.Id+'-'+item.Id}}
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
			openNames: {
				type: Array,
				default: () => [
					'1-3',
				]
			}
		},
		data: function() {
            return {
            }
        },
		methods: {
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
