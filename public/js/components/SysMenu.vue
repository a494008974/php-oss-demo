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
            <Button type="primary">搜索</Button>
            <Button type="primary">全部</Button>
            <Button type="primary">新增</Button>
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
                    width: 150,
                },
                {
                    title: 'Age',
                    key: 'age',
                    width: 100,
                },
                {
                    title: 'Province',
                    key: 'province',
                    width: 150,
                },
                {
                    title: 'City',
                    key: 'city',
                    width: 150,
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Postcode',
                    key: 'zip',
                    width: 100,
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
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
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'Washington, D.C. No. 1 Lake Park',
                    province: 'America',
                    city: 'Washington, D.C.',
                    zip: 100000
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    province: 'Australian',
                    city: 'Sydney',
                    zip: 100000
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
                    zip: 100000
                },
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    province: 'America',
                    city: 'New York',
                    zip: 100000
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'Washington, D.C. No. 1 Lake Park',
                    province: 'America',
                    city: 'Washington, D.C.',
                    zip: 100000
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    province: 'Australian',
                    city: 'Sydney',
                    zip: 100000
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
                    zip: 100000
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    province: 'Australian',
                    city: 'Sydney',
                    zip: 100000
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
                    zip: 100000
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
                    zip: 100000
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
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
