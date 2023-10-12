<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-row>
				<uni-col v-for="(data,index) in top_data" :key="index" :xs="24" :sm="12" :md="6">
					<uni-card :style="{height:'100px',backgroundColor:data.background_color}">
						<uni-row style="margin-top: 12.5px;">
							<uni-col :span="8">
								<view class="top_back">
									<uni-icons :type="data.icon" size="20" color="#fff" id="top_back_icon"></uni-icons>
								</view>
							</uni-col>
							<uni-col :span="16">
								<text class="title">{{data.title}}</text>
								<br>
								<text class="adress_num">{{data.num}}</text>
							</uni-col>
						</uni-row>
					</uni-card>
				</uni-col>
				<uni-col :xs="24" :sm="12" :md="6"></uni-col>
			</uni-row>
			<!-- 设备信息 -->
			<uni-row>
				<uni-col :xs="24" :sm="12">
					<uni-card title="注册" style="height: 350px;">
						<qiun-data-charts type="column" :chartData="chartData1" />
					</uni-card>
				</uni-col>
			</uni-row>

		</scroll-view>
	</view>
</template>
<script>
	import {tj} from '@/utils/api.js'
	export default {
		data() {
			return {
				token:'',
				top_data: [{
						background_color: "#ff4c55",
						icon: "tune",
						title: "昨日注册",
						num: ''
					},
					{
						background_color: "#6eadff",
						icon: "flag-filled",
						title: "今日注册",
						num: ''
					},
					{
						background_color: "#ffb457",
						icon: "person",
						title: "用户总数",
						num: ''
					}
				],
				chartData1: {},
				opts: {},
				chartData: {}
			}
		},
		onReady() {
			this.setUcharts1(),
				this.setUcharts2()
		},
		methods: {
			setUcharts1() {
				var that=this;
				uni.getStorage({
					key: 'token',
					success: function (res) {
						 that.token=res.data;
					}
				});
                tj('',that.token).then(res=>{
					  if(res.status==1){	
						  uni.clearStorageSync();
						  uni.navigateTo({
							url:"/"
						  })	
					  }else{
						  var data=res.data;
						  that.top_data[0]['num']=data.yesterday;
						  that.top_data[1]['num']=data.today;
						  that.top_data[2]['num']=data.total;
						  that.chartData1 = {
								categories:data.menu,
								series: [{
									name: "目标值",
									data: data.list,
								}]
						  }
					  }
                 })				

				
			},
			setUcharts2() {
				this.opts = {
						color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
							"#ea7ccc"
						],
						padding: [15, 10, 0, 15],
						legend: {},
						xAxis: {
							disableGrid: true
						},
						yAxis: {
							gridType: "dash",
							dashLength: 2
						},
						extra: {
							line: {
								type: "curve",
								width: 2
							}
						},
					},
					this.chartData = {
						categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
						series: [{
								name: "用户A",
								data: [35, 8, 25, 37, 4, 20]
							},
							{
								name: "用户B",
								data: [70, 40, 65, 100, 44, 68]
							},
							{
								name: "用户C",
								data: [100, 80, 95, 150, 112, 132]
							}
						]
					}
			}
		}
	}
</script>
<style>
	.top_back {
		height: 50px;
		width: 50px;
		background-color: rgba(255, 255, 255, 0.5);
		margin-top: 0px;
		border-radius: 100%;
		align-items: center;
	}

	#top_back_icon {
		position: absolute;
		padding: 15px 15px 15px 15px;
	}

	.title {
		color: white;
		font-size: 15px;
		margin-top: 50px;
	}

	.adress_num {
		color: white;
		font-size: 30px;
	}

	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
