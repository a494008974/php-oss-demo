<style>

</style>
<template>
		<div>
			<Menu theme="dark" active-name="1-1-1" :open-names="['1-1','1-2','1-3']" width="300px" @on-select="subMenuClick">
                <Submenu v-for="item in content.submenu" :key="content.name+'-'+item.name" :name="content.name+'-'+item.name">
                    <template slot="title">
                        <Icon :type="item.type"></Icon>
                        {{item.title}}
                    </template>
					<Menu-item  v-for="subitem in item.submenu"
								:key="content.name+'-'+item.name+'-'+subitem.name"
								:name="content.name+'-'+item.name+'-'+subitem.name">

						{{subitem.title}}

					</Menu-item>
                </Submenu>
            </Menu>
		</div>
</template>
<script>

    export default {
		props:{
			content:null
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
						if(this.content.submenu[i].name == strs[1]){
							for (var j in this.content.submenu[i].submenu){
								if(this.content.submenu[i].submenu[j].name == strs[2]){
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
