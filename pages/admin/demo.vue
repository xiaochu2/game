<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card></uni-card>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {

		},
		methods: {}
	}
</script>
<style scoped>
	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
