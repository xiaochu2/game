<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card>
				<template v-slot:title>
					<view>
						<button type="primary" size="mini" @click="openDialog"
							style="margin-left: 10px;margin-top: 10px;">新增类别</button>
					</view>
				</template>
				<uni-popup ref="alertDialog" type="dialog" :mask-click="false" style="width: 750rpx;">
					<uni-popup-dialog cancelText="关闭" confirmText="新增" title="新建用户类别" content="欢迎使用 uni-popup!"
						@confirm="dialogConfirm" @close="dialogClose" style="width: 730rpx;">
						<view class="">
							<uni-forms :modelValue="formData">
								<uni-forms-item label="类别" name="name">
									<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
								</uni-forms-item>
								<uni-forms-item label="权限" name="name">
									<uni-easyinput type="text" v-model="formData.age" placeholder="请输入年龄" />
								</uni-forms-item>
							</uni-forms>
						</view>
					</uni-popup-dialog>
				</uni-popup>
				<uni-table border stripe type="selection" @selection-change="selectionData">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center" width="30px">序号</uni-th>
						<uni-th align="center">用户类别</uni-th>
						<uni-th align="center">权限内容</uni-th>
						<uni-th align="center">创建时间</uni-th>
						<uni-th align="center">创建者</uni-th>
						<uni-th align="left" width="150px">管理</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="index of 5" :key="index">
						<uni-td>{{index}}</uni-td>
						<uni-td>超级管理员</uni-td>
						<uni-td>
							<uni-tag text="登录" type="success"></uni-tag>
							<uni-tag text="访问主页" type="error"></uni-tag>
						</uni-td>
						<uni-td>2022-9-{{index}}</uni-td>
						<uni-td>管理员{{index}}</uni-td>
						<uni-td>
							<button type="primary" size="mini">修改</button>
							<button type="warn" size="mini">删除</button>
						</uni-td>
					</uni-tr>
				</uni-table>
				<template v-slot:actions>
					<view style="width: 100%;">
						<uni-pagination @change="getPage" show-icon="true" total="50" current="1"
							style="float: left;margin-bottom: 10px;"></uni-pagination>
					</view>
				</template>
			</uni-card>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				formData: {
					name: 'LiMing',
					email: 'dcloud@email.com'
				}
			}
		},
		onReady() {

		},
		methods: {
			dialogConfirm(e) {
				console.log(e);
			},
			dialogClose(e) {
				console.log(e);
			},
			selectionData(e) {
				console.log(e);
			},
			openDialog() {
				this.$refs.alertDialog.open()
			},
			getPage(e) {
				console.log(e);
				uni.showToast({
					title: "即将展现" + e.current + '页',
					duration: 1500
				})
			}
		}
	}
</script>
<style scoped>
	.button_space {
		margin-left: 10px;
		margin-top: 12px;
	}

	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
