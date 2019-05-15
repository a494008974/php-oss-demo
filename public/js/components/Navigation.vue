<style>
    .layout-navigation{
        width:100%;
        height:60px;
        max-height:60px;
        overflow:hidden;
    }
    .ivu-menu-primary {
        background: #363e4f;
    }
    .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item-active,
    .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item:hover,
     .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu-active,
     .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu:hover {
        background: #2d8cf0;
    }

     .layout-logo {
         background: #303e4f;
         width:300px;
         height:60px;
         box-sizing:border-box;
         border: 1px solid #6b6b6b;
     }
     .layout-menu {
          position:absolute;
          top:0px;
          right:0px;
          left:300px;
          overflow:hidden;
          height:60px;
     }
</style>

<template>

    <div class="layout-navigation">
        <div class="layout-logo">

        </div>
        <div class="layout-menu">
            <Menu mode="horizontal" :theme="content.theme" :active-name="content.active" @on-select="menuClick">
                <Menu-item v-for="item in content.data" :key="item.Id" :name="item.Id">
                    <Icon :type="item.icon"></Icon>
                    {{item.title}}
                </Menu-item>
            </Menu>
        </div>
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
        methods:{
            menuClick: function(name){
                this.emitActive(name);
            },
            emitActive: function(name){
                for (var i in this.content.data) {
                    if(this.content.data[i].Id == name){
                        this.$bus.emit('selectMenu', this.content.data[i]);
                        break;
                    }
                }
            }
        },
        mounted() {
            this.emitActive(this.content.active);
        }
    }
</script>
