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
            <Input type="text" placeholder="name">
                <Icon type="ios-search" slot="prepend"></Icon>
            </Input>
            <Button type="primary" icon="ios-search">搜索</Button>
            <Button type="primary" icon="ios-plus">全部</Button>
            <Button type="primary" icon="ios-send">新增</Button>
        </div>
        <Table width="100%" :height="contentHeight.height" border :columns="columns2" :data="data4" style="margin: 20px"></Table>
        <Page :total="100" style="position: absolute;right: 20px"/>
    </div>
</template>
<script>
export default {
    data () {
        return {
            contentHeight: {
                height: 0
            },
            columns2: [
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Province',
                    key: 'province',
                },
                {
                    title: 'City',
                    key: 'city',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Postcode',
                    key: 'zip',
                },
                {
                    title: 'Action',
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
            ],
            data4: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    province: 'America',
                    city: 'New York',
                    zip: 100000
                }
            ]
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
