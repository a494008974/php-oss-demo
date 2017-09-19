<style>
	.layout_content{
		width: 100%;
		position: absolute;
		top: 60px;
		bottom: 0px;
		left: 0px;
	}
	.layout_silder{
		background-color: #363e4f;
		width: 300px;
		height: 500px;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		overflow-x:hidden;
	}
	.layout_silder_content{
		width:318px;
		height: 100%;
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		overflow-x:hidden;
	}
	.layout_main_content{
		position: absolute;
		top: 0px;
		bottom: 0px;
		right: 0px;
		left: 300px;
	}
</style>
<template>
		<div class="layout_content">
			<div class="layout_silder" :style="contentHeight">
				<div class="layout_silder_content">
					<nslidernav :content="content"></nslidernav>
				</div>
			</div>
			<div class="layout_main_content">
				<ncontenttab :height="contentHeight.height"></ncontenttab>
			 </div>
		</div>
</template>
<script>

    export default {
		data: function() {
            return {
				content:"",
				contentHeight: {
					height: "0"
				  }
            }
        },
		created() {
		  this.$bus.on('selectMenu', this.selectMenu);
		},
		beforeDestroy() {
		  this.$bus.off('selectMenu', this.selectMenu);
		},
		methods: {
		  selectMenu(name) {
			this.content = name;
		  }
		},
		mounted: function(){
			this.contentHeight.height = (document.body.clientHeight - 60);
			const that = this;
			window.onresize = function temp() {
				that.contentHeight.height = (document.body.clientHeight - 60);
			};
		}
    }
</script>
