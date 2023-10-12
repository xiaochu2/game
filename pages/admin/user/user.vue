<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card>
				<template v-slot:title>
					<view>
						<uni-row>
							<uni-col :xs="24" :md="20">
								<uni-row style="margin-top:10px">
									<uni-col :xs="24" :md="12">
										<uni-easyinput v-model="fromsData.user_name" placeholder="请输入用户名">
										</uni-easyinput>
									</uni-col>
									<uni-col :xs="0" :md="2"></uni-col>
									<uni-col :xs="24" :md="12">
										<uni-easyinput v-model="fromsData.email" placeholder="请输入用户邮箱"></uni-easyinput>
									</uni-col>
								</uni-row>
							</uni-col>
							<uni-col :xs="24" :md="4">
								<view class="button_space">
									<button type="primary" size="mini">查询</button>
									<button type="warn" size="mini" style="margin-left: 10px;">重置</button>
									<button type="default" size="mini" style="margin-left: 10px;">新增</button>
								</view>
							</uni-col>
						</uni-row>
					</view>
				</template>
				<uni-table border stripe type="selection" @selection-change="selectionData">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center" width="30px">序号</uni-th>
						<uni-th align="center">昵称</uni-th>
						<uni-th align="center">用户名</uni-th>
						<uni-th align="center">邮箱</uni-th>
						<uni-th align="center">注册时间</uni-th>
						<uni-th align="left">地址</uni-th>
						<uni-th align="left" width="150px">管理</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="index of 10" :key="index">
						<uni-td>{{index}}</uni-td>
						<uni-td>用户{{index}}</uni-td>
						<uni-td>user{{index}}</uni-td>
						<uni-td>12345{{index}}</uni-td>
						<uni-td>2022-9-{{index}}</uni-td>
						<uni-td>北京市海淀区</uni-td>
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
				fromsData: {
					user_name: '',
					email: ''
				}
			}
		},
		onReady() {

		},
		methods: {
			selectionData(e){
				console.log(e);
			},
			getPage(e){
				console.log(e);
				uni.showToast({
					title:"即将展现"+e.current+'页',
					duration:1500
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
