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
     }
     .layout-menu {
          position:absolute;
          top:0px;
          right:200px;
          left:300px;
          overflow:hidden;
          height:60px;
     }

    .layout-user {
        position:absolute;
        top:0px;
        right:0px;
        width:200px;
        height:60px;
        box-sizing:border-box;
        background: #363e4f;
    }

    .layout-logo h1 {
        font-size: 26px;
        font-weight: bold;
        display: block;
        text-align: center;
        line-height: 60px;
    }

    .layout-user div {
        font-size: 16px;
        line-height: 60px;
        display: block;
        text-align:right;
        padding-right: 30px;
    }
</style>

<template>

    <div class="layout-navigation">
        <div class="layout-logo">
            <h1>{{content.title}}</h1>
        </div>
        <div class="layout-menu">
            <Menu mode="horizontal" :theme="content.theme" :active-name="content.active" @on-select="menuClick">
                <Menu-item v-for="item in content.data" :key="item.Id" :name="item.Id">
                    <Icon :type="item.icon"></Icon>
                    {{item.title}}
                </Menu-item>
            </Menu>
        </div>
        <div class="layout-user">
            <div>用户:{{content.username}}<a style="margin-left: 50px" href="destory">注销</a></div>
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
                this.$bus.emit('selectNav');
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
