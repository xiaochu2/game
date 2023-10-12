<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-popup ref="dialog" type="dialog">
				<uni-popup-dialog :beforeClose="true" cancelText="生成秘钥" confirmText="添加秘钥" ref="inputClose"
					@confirm="addKey" @close="createKey" mode="input" title="秘钥生成" :value="equi_key"
					placeholder="请输入秘钥或点击生成">
				</uni-popup-dialog>
			</uni-popup>
			<uni-card title="设备秘钥管理">
				<uni-table border stripe emptyText="暂无更多数据">
					<!-- 表头行 -->
					<uni-tr>
						<uni-th align="center" width="20">序号</uni-th>
						<uni-th align="center">用户名</uni-th>
						<uni-th align="center">秘钥</uni-th>
						<uni-th align="center">生成日期</uni-th>
						<uni-th align="center">使用状态</uni-th>
						<uni-th align="right">
							<button type="primary" @click="showdialog()" size="mini">新增</button>
						</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="index of 10" :key="index">
						<uni-td>1</uni-td>
						<uni-td>{{'用户名'+index}}</uni-td>
						<uni-td>
							<text selectable="true">EDKNF58SW5CS51</text>
						</uni-td>
						<uni-td>2022-9-23</uni-td>
						<uni-td>已绑定</uni-td>
						<uni-td></uni-td>
					</uni-tr>
				</uni-table>

			</uni-card>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				equi_key: ''
			}
		},
		onReady() {

		},
		methods: {
			showdialog() {
				this.$refs.dialog.open()
			},
			addKey(e) {
				console.log(e);
				this.$refs.dialog.close()
			},
			createKey() {
				const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				]
				var key = ""
				for (var i = 0; i < 16; i++) {
					const number = parseInt(Math.random() * (35 - 0 + 1) + 0, 10)
					key = key.concat(data[number])
					// console.log(key);
				}
				this.equi_key=key
			}
		}
	}
</script>
<style>
	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
