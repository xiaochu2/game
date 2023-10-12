<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card title="新增设备" style="min-height: 300px;">
				<uni-row>
					<uni-col :xs="24" :md="6" style="min-height: 300px;">
						<uni-card style="min-height: 300px;">
							<uni-icons :type="data.equi_icon" color="#52ffa3" size="100" class="icon"></uni-icons>
							<view class="equi_icon">
								<text>设备信息：</text>
								<br>
								<text style="margin-left: 5px;">设备名称：{{data.equi_name}}</text>
								<br>
								<text style="margin-left: 5px;">设备秘钥：{{data.equi_key}}</text>
								<br>
								<text>命令：</text>
								<view v-for="(com,index) in command" :key="index" class="">
									<text
										style="margin-left: 5px;">命令{{index+1}}：{{com.command}}——>{{com.adress}}</text>
								</view>
							</view>
						</uni-card>
					</uni-col>
					<uni-col :xs="24" :md="9">
						<uni-card title="设备">
							<uni-forms :modelValue="equiFroms" labelWidth="80px">
								<uni-forms-item label="设备名称" name="name">
									<uni-easyinput type="text" v-model="equiFroms.equi_name" placeholder="请输入命令内容" />
								</uni-forms-item>
								<uni-forms-item label="设备图标" name="name">
									<uni-easyinput type="text" v-model="equiFroms.icon" placeholder="请输入命令内容" />
								</uni-forms-item>
								<uni-forms-item label="设备秘钥" name="name">
									<uni-easyinput type="text" v-model="equiFroms.key" placeholder="请输入命令介绍" />
								</uni-forms-item>
							</uni-forms>
							<button type="warn" size="mini" @click="submitForm">确认</button>
						</uni-card>
					</uni-col>
					<uni-col :xs="24" :md="9">
						<uni-card title="设备命令">
							<uni-forms :modelValue="commandFroms" labelWidth="80px">
								<uni-forms-item label="命令" name="name">
									<uni-easyinput type="text" v-model="commandFroms.command" placeholder="请输入命令内容" />
								</uni-forms-item>
								<uni-forms-item label="命令解释" name="name">
									<uni-easyinput type="text" v-model="commandFroms.adress" placeholder="请输入命令介绍" />
								</uni-forms-item>
							</uni-forms>
							<button type="primary" size="mini" @click="createCommand">新建命令</button>
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
				data: {
					equi_name: "智能开关",
					line_status: 'online',
					equi_key: "6848HUGN",
					equi_icon: "link"
				},
				equiFroms: {
					equi_name:'',
					icon: '',
					key: 'JISN5412SW4D5A2W'
				},
				command: [],
				commandFroms: {
					command: '',
					adress: ''
				}
			}
		},
		onReady() {

		},
		methods: {
			createCommand() {
				this.command.splice(0, 0, this.commandFroms)
				this.commandFroms={
					command: '',
					adress: ''
				}
				console.log(this.command);
			}
		}
	}
</script>
<style scoped>
	.equi_icon {
		position: absolute;
		top: 120px;
	}

	.icon {
		position: absolute;
		top: 50px;
		left: calc(50% - 50px);
	}

	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
