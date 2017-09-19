<style>
	
</style>
<template>
		<div>
			<!-- Standard button -->
			<button type="button" class="btn btn-default">（默认样式）Default</button>

			<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
			<button type="button" class="btn btn-primary">（首选项）Primary</button>

			<!-- Indicates a successful or positive action -->
			<button type="button" class="btn btn-success">（成功）Success</button>

			<!-- Contextual button for informational alert messages -->
			<button type="button" class="btn btn-info">（一般信息）Info</button>

			<!-- Indicates caution should be taken with this action -->
			<button type="button" class="btn btn-warning">（警告）Warning</button>

			<!-- Indicates a dangerous or potentially negative action -->
			<button type="button" class="btn btn-danger">（危险）Danger</button>

			<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
			<button type="button" class="btn btn-link">（链接）Link</button>
			<br/>
			{{msg}}
			
			<br/>
			
			<button type="button" class="btn btn-default" aria-label="Left Align">
			  <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
			</button>

			<button type="button" class="btn btn-default btn-lg">
			  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
			</button>
			
			<br/>
			
			<Button>Default</Button>
			<Button type="primary">Primary</Button>
			<Button type="ghost">Ghost</Button>
			<Button type="dashed">Dashed</Button>
			<Button type="text">Text</Button>
			<br><br>
			<Button type="info">信息按钮</Button>
			<Button type="success">成功按钮</Button>
			<Button type="warning">警告按钮</Button>
			<Button type="error">错误按钮</Button>

			<Button type="info">信息按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="error">错误按钮</Button>
			
			<br/>
			
			<Button type="primary" shape="circle" icon="ios-search"></Button>
			<Button type="primary" icon="ios-search">搜索</Button>
			<Button type="primary" shape="circle" icon="ios-search">搜索</Button>
			<Button type="primary" shape="circle">圆角按钮</Button>
			<br><br>
			<Button type="ghost" shape="circle" icon="ios-search"></Button>
			<Button type="ghost" icon="ios-search">搜索</Button>
			<Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
			<Button type="ghost" shape="circle">圆角按钮</Button>
		</div>
</template>
<script>
	
	
    export default {
        data () {
            return {
                msg:"hello Vue Component AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!"
            }
        }
    }
</script>
