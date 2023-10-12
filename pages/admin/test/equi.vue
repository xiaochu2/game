<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card title="设备管理">
				<uni-row>
					<uni-col :xs="24" :md="8">
						<uni-card style="height: 300px;">
							<uni-icons :type="data.equi_icon" size="100" color="#74d3ff" class="equi_iccn"></uni-icons>
							<view class="centent">
								<text>设备名称：{{data.equi_name}}</text>
								<br>
								<text>设备秘钥：{{data.equi_key}}</text>
								<br>
								<text>设备状态：{{data.line_status=='online'?'在线':'不在线'}}</text>
							</view>
						</uni-card>
					</uni-col>
					<uni-col :xs="24" :md="16">
						<uni-forms :modelValue="formData">
							<uni-forms-item label="链接" name="name">
								<uni-easyinput type="text" v-model="formData.url" placeholder="请输入设备链接" />
							</uni-forms-item>
							<uni-forms-item label="秘钥" name="name">
								<uni-easyinput type="text" v-model="formData.key" placeholder="请输入发送设备秘钥" />
							</uni-forms-item>
							<uni-forms-item label="命令内容" name="name">
								<uni-easyinput type="text" v-model="formData.data" placeholder="请输入发送命令的内容" />
							</uni-forms-item>
						</uni-forms>
						<button type="warn" size="mini" @click="sendMessage">发送命令</button>
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
				data: {
					equi_name: "智能开关",
					line_status: 'online',
					equi_key: "6848HUGN",
					equi_icon: "link"
				},
				formData: {
					url: 'http://equi.com',
					key: '6848HUGN',
					data:''
				}
			}
		},
		onReady() {

		},
		methods: {
			sendMessage(){
				uni.showToast({
					title: '发送命令',
					duration: 2000
				});
			}
		}
	}
</script>
<style>
	.centent {
		position: absolute;
		padding-top: 120px;
	}

	.equi_iccn {
		position: absolute;
		padding-top: 50px;
		left: calc(50% - 50px);
	}

	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
