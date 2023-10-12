<template>
	<view class="login_back">
		<view class="title_back" align="center">
			<text class="title">找回密码</text>
		</view>
		<view class="froms">
			<uni-forms :modelValue="formData" label-width="80px">
				<uni-forms-item label="邮箱" name="name">
					<uni-easyinput type="text" v-model="formData.user_name" placeholder="请输入用户名" />
				</uni-forms-item>
				<uni-forms-item label="新密码" name="password">
					<uni-easyinput type="password" v-model="formData.user_password" placeholder="请输入密码" />
				</uni-forms-item>
				<uni-forms-item label="确认密码" name="password">
					<uni-easyinput type="password" v-model="formData.user_password" placeholder="请再次输入密码" />
				</uni-forms-item>
				<uni-row>
					<uni-col :span="16">
						<uni-easyinput type="password" v-model="formData.user_password" placeholder="请输入验证码" />
					</uni-col>
					<uni-col :span="8">
						<button type="primary" size="mini" style="padding: 3px;width: 100%;">获取验证码</button>
					</uni-col>
				</uni-row>
			</uni-forms>
			<button type="warn" @click="submitForm()" style="margin-top: 10px;">重置密码</button>
		</view>
		<view class="bottom_sapce">
			<navigator url="/pages/login/login" open-type="navigate" hover-class="navigator-hover"
				style="float: left;padding-left: 30px;">
				<text class="register">登录</text>
			</navigator>
			<navigator url="navigate/navigate?title=navigate" open-type="navigate" hover-class="navigator-hover"
				style="float: right;padding-right:30px">
				<text class="register">忘记密码</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: true,
				formData: {
					user_name: '',
					user_password: '',
					remember: false
				}
			}
		},
		methods: {
			change() {
				this.formData.remember = !this.formData.remember
				console.log(this.formData.remember ? '记住密码' : "不记住密码");
			},
			submitForm() {
				console.log(this.formData);
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
		padding-top: 30px;
		padding-left: 30px;
		padding-right: 30px;
		padding-bottom: 10px;
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
