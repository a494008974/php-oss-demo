<style>
    .ivu-input-group {
        display: table;
        width: 20%;
        border-collapse: separate;
        position: relative;
        font-size: 12px;
        top: 0px;
        float: left;
        margin-right: 10px;
        margin-left: 20px;
    }

</style>
<template>
    <div>

        <div style="margin-top: 20px">
            <Input type="text">
                <Icon type="ios-search" slot="prepend"></Icon>
            </Input>
            <Button type="primary" icon="ios-search">搜索</Button>
            <Button type="primary" icon="ios-apps-outline">全部</Button>
            <Button type="primary" icon="ios-add-circle-outline" @click="addmenu = true">新增</Button>
            <Modal
                    title="新增菜单"
                    v-model="addmenu"
                    @on-ok="onok"
                    class-name="vertical-center-modal">

                <Form :model="formItem" :label-width="80">
                    <FormItem label="TITLE">
                        <Input ref="title" v-model="formItem.title" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="ICON">
                        <Input ref="icon" v-model="formItem.icon" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="URL">
                        <Input ref="url" v-model="formItem.url" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="PARENT">
                        <Input ref="parent" v-model="formItem.parent" placeholder="Enter something..."></Input>
                    </FormItem>
                </Form>

            </Modal>
        </div>

        <Table width="100%" :height="contentHeight.height" border :columns="columns" :data="contentNew" style="margin: 20px"></Table>
        <Page :total="100" style="position: absolute;right: 20px"/>
    </div>
</template>
<script>
export default {
    props:{
        content:null
    },
    data:function () {
        return {
            contentHeight: {
                height: 0
            },
            contentNew: this.content,
            addmenu: false,
            formItem: {
                title: '',
                icon: '',
                url: '',
                parent: '',
            },
            columns: [
                {
                    title: 'ID',
                    key: 'Id',
                },
                {
                    title: 'TITLE',
                    key: 'title',
                },
                {
                    title: 'ICON',
                    key: 'icon',
                },
                {
                    title: 'URL',
                    key: 'url',
                },
                {
                    title: 'PARENT',
                    key: 'parent',
                },
                {
                    title: 'ACTION',
                    key: 'action',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, 'Del'),
                            h('Button', {
                                props: {
                                    type: 'text',
                                    size: 'small'
                                }
                            }, 'Edit')
                        ]);
                    }
                }
            ]
        }
    },
    methods: {
        onok: function(){
            var params = new URLSearchParams();
            params.append('title', this.$refs.title.value);
            params.append('icon', this.$refs.icon.value);
            params.append('url', this.$refs.url.value);
            params.append('parent', this.$refs.parent.value);
            this.$axios.post("http://localhost:8888/php-oss-demo/public/index.php/AdminCtrl/insertMenu",params).then(res=>{
                console.log(res.data);
                if(res.data.status == 200){
                    this.contentNew.push(res.data.msg);
                }else {
                    this.$Message.info(res.data.msg);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted: function(){
        this.contentHeight.height = (window.screen.height/2-4);
        const that = this;
        window.onresize = function temp() {
            that.contentHeight.height = (window.screen.height/2-4);
        };
    }
}
</script>
