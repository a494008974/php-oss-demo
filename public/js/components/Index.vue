<style>
    .number2,.number3{color:#C40000;font-size:60px;font-family:Impact, Haettenschweiler, "Franklin Gothic Bold", "Arial Black", "sans-serif"}
</style>
<template>
    <div>
        <h4>Basic</h4>
        <br><br>
        <ButtonGroup>
            <Button>Cancel</Button>
            <Button type="primary">Confirm</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button disabled>Yesterday</Button>
            <Button disabled>Today</Button>
            <Button disabled>Tomorrow</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button>M</Button>
            <Button type="dashed">R</Button>
        </ButtonGroup>
        <br><br>
        <h4>Icons</h4>
        <br><br>
        <ButtonGroup>
            <Button type="primary">
                <Icon type="ios-arrow-back"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary" icon="ios-skip-backward"></Button>
            <Button type="primary" icon="ios-skip-forward"></Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button icon="ios-color-wand-outline"></Button>
            <Button icon="ios-sunny-outline"></Button>
            <Button icon="ios-crop"></Button>
            <Button icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br><br>
        <h4>Circle</h4>
        <br><br>
        <ButtonGroup shape="circle">
            <Button type="primary">
                <Icon type="ios-arrow-back"></Icon>
                Backward
            </Button>
            <Button type="primary">
                Forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button type="primary" icon="ios-skip-backward"></Button>
            <Button type="primary" icon="ios-skip-forward"></Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button icon="ios-color-wand-outline"></Button>
            <Button icon="ios-sunny-outline"></Button>
            <Button icon="ios-crop"></Button>
            <Button icon="ios-color-filter-outline"></Button>
        </ButtonGroup>
        <br><br>
        <h4>Size</h4>
        <br><br>
        <ButtonGroup size="large">
            <Button>Large</Button>
            <Button>Large</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button>Default</Button>
            <Button>Default</Button>
        </ButtonGroup>
        <ButtonGroup size="small">
            <Button>Small</Button>
            <Button>Small</Button>
        </ButtonGroup>
        <br><br>
        <ButtonGroup size="large" shape="circle">
            <Button>Large</Button>
            <Button>Large</Button>
        </ButtonGroup>
        <ButtonGroup shape="circle">
            <Button>Default</Button>
            <Button>Default</Button>
        </ButtonGroup>
        <ButtonGroup size="small" shape="circle">
            <Button>Small</Button>
            <Button>Small</Button>
        </ButtonGroup>

        <ButtonGroup vertical>
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-twitter"></Button>
            <Button icon="logo-googleplus"></Button>
            <Button icon="logo-tumblr"></Button>
        </ButtonGroup>

    </div>
</template>

<script>
    export default {
        props:{

        },
        data: function() {
            return {
            }
        },
        mounted() {

        }
    }


</script>