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
         padding-top: 10px;
         box-sizing:border-box;
     }
     .layout-menu {
          position:absolute;
          top:0px;
          right:0px;
          left:300px;
          overflow:hidden;
          height:60px;
     }
    .layout-logo h1 {
        font-size: 26px;
        height: 60px;
        font-weight: bold;
        display: block;
        text-align: center;
    }
</style>

<template>

    <div class="layout-navigation">
        <div class="layout-logo">
            <h1>BSW战队管理系统</h1>
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
