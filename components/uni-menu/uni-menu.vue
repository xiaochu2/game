<template>
	<view class="">
		<view class="box-bg">
			<uni-nav-bar shadow="true" leftWidth="60rpx" rightWidth="0rpx" height="65px">
				<template v-slot:left>
					<view class="menu">
						<uni-icons type="bars" size="28" @click="open()"></uni-icons>
					</view>
				</template>
				<view class="input-view">
<!-- 					<view class="" style="width:300rpx">
						<uni-easyinput focus confirm-type="search" prefixIcon="search" v-model="search_value"
							@confirm="search()" placeholder="请输入搜索内容"></uni-easyinput>
					</view> -->
					<view class="user_head">
						<uni-icons type="close"  size="30" class="title_icon" @click="quit();"></uni-icons>
						<text class="user_name">{{name}}</text>
						<image class="image_user" :src="src"></image>
						
						<!-- <uni-icons type="chatbubble-filled" :color="head_icon.message" size="30" class="title_icon"></uni-icons> -->
					</view>
				</view>
			</uni-nav-bar>
		</view>
		<uni-drawer ref="showLeft" mode="left" :width="250" :mask-click="true">
			<view class="menu_back">
				<view class="menu_logo_back">
					<text class="menu_logo_title">代理后台</text>
					<br>
					<!-- <text class="menu_logo_adress">致力于快速开发物联网</text> -->
				</view>
				<uni-collapse v-model="collapse_value" :show-animation="true" :accordion="true" @change="getCollapse">
					<uni-collapse-item v-for="(menu,index) in menu_data" :key="index" :name="'coll'+index"
						title-border="none" :border="false" :show-arrow="false">
						<template v-slot:title>
							<view :class="collapse_value=='coll'+index?'menu_title_back_active':'menu_title_back'">
								<uni-icons :type="menu.title_icon.type" :color="menu.title_icon.color"
									:size="menu.title_icon.size" style="float: left;margin-top: 15px;">
								</uni-icons>
								<text style="float:left; margin-top:13px;margin-left: 10px;">{{menu.title}}</text>
								<uni-icons :type="collapse_value=='coll'+index?'minus':'plus'" color="#fff" size="25"
									style="float: right;margin-top: 15px;">
								</uni-icons>
							</view>
						</template>
						<view v-for="(item,i) in menu.data" :key="i" class="menu_item_back">
							<view @click="getItem(index,i)"
								:class="collapse_item_path==item.path?'menu_item_active':'menu_item'">
								<text style="float: left;margin-top:15px;margin-left: 35px;">{{item.title}}</text>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			    name:'',
				head_icon:{
					notice:'#3cf9c4',
					message:'#ffb92c'
				},
				search_value: '',
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
				collapse_value: "coll0",
				collapse_item_path: '',
				menu_data: [{
						title: "主页",
						title_icon: {
							color: '#fff',
							size: '22',
							type: 'home'
						},
						data: [{
							title: "数据监控",
							path: "/pages/admin/home",
						}]
					},
					{
						title: "用户管理",
						title_icon: {
							color: '#fff',
							size: '22',
							type: 'settings-filled'
						},
						data: [{
								title: "用户列表",
								path: "/pages/admin/equipment/user_list",
							},
							// {
							// 	title: "设备秘钥管理",
							// 	path: "/pages/admin/equipment/equi_key",
							// },
							{
								title: "新增用户",
								path: "/pages/admin/equipment/add_user",
							}
						]
					},
					{
						title: "财务管理",
						title_icon: {
							color: '#fff',
							size: '22',
							type: 'vip'
						},
						data: [{
								title: "充值列表",
								path: "/pages/admin/test/socket",
							},
							{
								title: "提现列表",
								path: "/pages/admin/test/equi",
							}
						]
					},
					{
						title: "用户管理",
						title_icon: {
							color: '#fff',
							size: '22',
							type: 'person'
						},
						data: [{
							title: "用户管理",
							path: "/pages/admin/user/user",
						},
						{
							title: "角色管理",
							path: "/pages/admin/user/userlabel",
						}]
					}

				]
			}
		},
		methods: {
			getItem(index, i) {
				this.collapse_item_path = this.menu_data[index].data[i].path
				uni.navigateTo({
					url: this.collapse_item_path
				})
				this.$refs.showLeft.close()
			},
			getCollapse(e) {
				console.log(e);
			},
			open() {
				this.$refs.showLeft.open();
			},
			quit(){
				uni.showModal({
					title: '提示',
					content: '是否退出登录',
					success: function (res) {
						if (res.confirm) {
							uni.removeStorage({
							key: 'token',					
							success: function (res) {
									uni.navigateTo({
										url:"/"
									})	
							}});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			getNotice(){
				if (this.head_icon.notice=="#fff") {
					this.head_icon.notice="#3cf9c4"
				} else{
					this.head_icon.notice="#fff"
				}
				setTimeout(()=>{
					this.getNotice()
				},1000)
			},
			getMessage(){
				if (this.head_icon.message=="#fff") {
					this.head_icon.message="#ffb92c"
				} else{
					this.head_icon.message="#fff"
				}
				setTimeout(()=>{
					this.getMessage()
				},1000)
			},
			search() {
				alert(this.search_value)
			}
		},
		mounted() {
			var htis=this;
			uni.getStorage({
				key: 'name',
				success: function (res) {
					 htis.name=res.data;
				}
			});
			
			this.getNotice()
			setTimeout(()=>{
				this.getMessage()
			},500)
		}
	}
</script>

<style lang="scss">
	$nav-height: 30px;

	.menu_item_active {
		background-color: #2a323f;
		color: white;
		height: 50px;
	}

	.menu_item:hover {
		background-color: #50627f;
		color: white;
		height: 50px;
	}

	.menu_item {
		background-color: #353f4f;
		color: white;
		height: 50px;
	}

	.menu_title_back_active {
		background-color: #353f4f;
		color: #fff;
		height: 50px;
	}

	.menu_title_back:hover {
		background-color: #353f4f;
		color: #fff;
		height: 50px;
	}

	.menu_title_back {
		background-color: #424f63;
		color: #fff;
		height: 50px;
	}

	.menu_logo_adress {
		position: absolute;
		top: 40px;
		left: 45px
	}

	.menu_logo_title {
		font-size: 30px;
		position: absolute;
		top: 10px;
		left: calc(50% - 70px);
	}

	.menu_logo_back {
		height: 65px;
		color: white;
	}

	.menu_back {
		background-color: #424f63;
		width: 100%;
		height: 100%;
	}

	.user_name {
		float: right;
		margin-left: 10rpx;
		font-size: 15px;
		margin-top: 5px;
		margin-left: 5px;
		color: #587d8c;
	}

	.title_icon {
		float: right;
		margin-right: 10rpx;
		margin-top: 5px
	}

	.user_head {
		width: 100%;
		// background-color: #2bd19a;
		height: 38px;
		word-wrap: break-word;
		/*强制换行*/
		overflow: hidden;
		/*超出隐藏*/
	}

	.box-bg {
		background-color: #F5F5F5;
		padding: 0px 0;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 500px;
		flex: 1;
		// background-color: #f8f8f8;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 15px 0;
		line-height: $nav-height;
	}

	.title {
		height: 65px;
		width: 100%;
		background-color: #2bd19a;
	}

	.image_user {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		float: right;
		margin-top: 5px;
	}
</style>
