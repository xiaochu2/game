<template>
	<view class="login_back">
		<view class="title_back" align="center">
			<text class="title">代理后台</text>
		</view>
		<view class="froms">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="用户名" name="name">
					<uni-easyinput type="text" v-model="formData.username" placeholder="请输入用户名" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
				</uni-forms-item>
				<uni-forms-item label="记住密码" name="password">
					<checkbox-group name="" @change="change">
						<label>
							<checkbox value="ces" :checked="formData.remember" /><text></text>
						</label>
					</checkbox-group>
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submitForm()">登录</button>
		</view>

	</view>
</template>

<script>	
	import {apiGetBanner} from '@/utils/api.js'
	export default {

		data() {
			return {
				value: true,
				formData: {
					username: '',
					password: '',
					remember: false
				},

				
			}
		},
		onShow: function() {
				var htis=this;
				uni.getStorage({
					key: 'token',
					success: function (res) {
						uni.navigateTo({
							url:"/pages/admin/home"
						})	
					}
				});				
				uni.getStorage({
					key: 'username',
					success: function (res) {
						 htis.formData.username=res.data;
					}
				});
				uni.getStorage({
					key: 'password',
					success: function (res) {
						 htis.formData.password=res.data;
					}
				});
		},
		methods: {
			change() {
				this.formData.remember = !this.formData.remember
				console.log(this.formData.remember ? '记住密码' : "不记住密码");
				
			},
			submitForm() {
				console.log(this.formData);		
				  var that=this;
                  apiGetBanner(this.formData).then(res=>{
					  if(res.status==1){
					   uni.showToast({
						 title: res.msg,
						 icon:'error'
					   })						  
					  }else{
						  
						if(that.formData.remember){

							uni.setStorage({key: 'username',data: that.formData.username,});
							uni.setStorage({key: 'password',data: that.formData.password,});
						}else{
							uni.removeStorage({key: 'username',});	
							uni.removeStorage({key: 'password',});	
						}
						uni.setStorage({key: 'token',data: res.data.token,});
						uni.setStorage({key: 'name',data: that.formData.username,});
						uni.navigateTo({
							url:"/pages/admin/home"
						})						  
					  }
                 })
		

			}
		}
	}
</script>

<style>
	page {
		background-image: url(@/static/login_back.jpg);
		background-size: cover;
		height: 100vh;
	}

	.froms {
		padding: 30px;
	}

	.login_back {
		width: 700rpx;
		height: 400px;
		background-color: rgba(255, 255, 255, 0.8);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
	}

	.title_back {
		padding-top: 20px;

	}

	.title {
		color: #374041;
		font-size: 40px;
		align-items: center;
	}
</style>
