<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card title="添加用户" style="min-height: 300px;">
				<uni-row>
					<uni-col :xs="24" :md="9">
						<uni-card title="">
							<uni-forms :modelValue="commandFroms" labelWidth="80px">
								<uni-forms-item label="用户" name="name">
									<uni-easyinput type="text" v-model="commandFroms.accountname" placeholder="请输入用户" />
								</uni-forms-item>
								<uni-forms-item label="密码" name="name">
									<uni-easyinput type="text" v-model="commandFroms.pwd" placeholder="请输入密码" />
								</uni-forms-item>
							</uni-forms>
							<button type="primary" size="mini" @click="createCommand">添加</button>
						</uni-card>
					</uni-col>
				</uni-row>
			</uni-card>
		</scroll-view>
	</view>
</template>
<script>
	import {register} from '@/utils/api.js'
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
					accountname: '',
					pwd: ''
				}
			}
		},
		onReady() {

		},
		methods: {
			createCommand() {
				var that=this;
				uni.getStorage({
					key: 'token',
					success: function (res) {
						 that.token=res.data;
					}
				});
                register(that.commandFroms,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						   uni.showToast({
							 title: res.data,
							 icon:'success'
						   })
					  }						
                 })
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
