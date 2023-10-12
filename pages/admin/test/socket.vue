<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card title="Socket调试">
				<uni-row>
					<uni-col :xs="24" :md="8">
						<uni-forms :modelValue="formData">
							<uni-forms-item label="链接" name="name">
								<uni-easyinput type="text" v-model="formData.url" placeholder="请输入socket链接" />
							</uni-forms-item>
							<uni-forms-item label="内容" name="name">
								<uni-easyinput type="text" v-model="formData.data" placeholder="请输入发送内容" />
							</uni-forms-item>
						</uni-forms>
						<button type="primary" size="mini" @click="submitForm">连接Socket</button>
						<button type="warn" size="mini" @click="sendMessage">发送信息</button>
					</uni-col>
					<uni-col :xs="24" :md="16">
						<uni-card title="返回信息">
							<view class="show_space">
								{{result}}
							</view>
						</uni-card>
					</uni-col>
				</uni-row>
			</uni-card>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				formData: {
					url: 'ws://localhost:8282',
					data: ''
				},
				result:'',
				socket_status:false,
			}
		},
		onReady() {

		},
		methods: {
			submitForm(){
				uni.connectSocket({
					url:this.formData.url,
					success:(e)=> {
						console.log(e);
					},
					fail:(e)=> {
						console.log(e);
					},
					complete:()=>{
						console.log('qqjs');
					}
				})
				uni.onSocketOpen(()=>{
					this.socket_status=true
					console.log('WebSocket连接已打开');
				})
				uni.onSocketError(()=>{
					this.socket_status=false
				  console.log('WebSocket连接打开失败，请检查！');
				});
				uni.onSocketMessage((res)=>{
					console.log(res);
					this.result=res
				})
			},
			sendMessage(){
				if (this.socket_status) {
					uni.sendSocketMessage({
						data:JSON.stringify({
							user_name:'user',
							key:'sgyusa'
						}),
						success: (res) => {
							console.log(res);
							uni.showToast({
								title: '发送成功',
								duration: 2000
							});
						},
						fail: (res) => {
							console.log(res);
							uni.showToast({
								title: '发送失败',
								duration: 2000
							});
						}
					})
				} else{
					uni.showToast({
						title: '未连接到Socket',
						duration: 2000
					});
				}
			}
		}
	}
</script>
<style>
	.scroll-Y {
		height: calc(100vh - 68px);
	}
	.show_space{
		background-color: #ced7dc;
	}
</style>
