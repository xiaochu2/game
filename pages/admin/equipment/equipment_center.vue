<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-Y">
			<uni-card style="min-height: 300px;">
				<template v-slot:title>
					<view>
						<uni-row>
							<uni-col :xs="24" :md="20">
								<uni-row style="margin-top:10px">
									<uni-col :xs="24" :md="12">
										<uni-easyinput  v-model="fromsData.Account" placeholder="请输入用户名">
										</uni-easyinput>
									</uni-col>

								</uni-row>
							</uni-col>
							<uni-col :xs="24" :md="4" style="padding-top:10px;">
								<view class="button_space">
									<button type="primary" size="mini" @click="Inquire();">查询</button>
									<button type="warn" size="mini" style="margin-left: 10px;" @click="reset();">重置</button>
								
								</view>
							</uni-col>
						</uni-row>
					</view>
				</template>
				<uni-row>
					<uni-col v-for="(data,index) in equipment_data" :key="index" :xs="24" :md="12" :lg="6">
						<uni-card :title="data.Account" :extra="'id：'+data.uid" style="height: 170px;" :thumbnail="data.headimgurl">
						   <text>金币：{{data.score}}
							   <uni-icons type="plusempty" size="20" style="margin-right:5px;"></uni-icons>
							   <uni-icons type="minus" size="20"></uni-icons>
						   </text><br>
						   <!-- <text>状态：正常</text><br> -->
						   <text>今日充值：111111</text> <text>今日盈利：111111</text><br>
						   <text>累计充值：111111</text> <text>累计提现：111111</text><br>
						   <text>状态：正常</text>
							<!-- <text>房卡：{{data.diamond}}</text><br> -->
							<!-- <text>上分：1000 下分：1000</text><br> -->
							
							<uni-row style="padding-top:10px;">
						<!-- 		<text>今日充值：1000 </text>
								
								
								<uni-col :span="6" align="center">
									<text>今日充值：1000 </text>
								</uni-col>
								<uni-col :span="6" align="center">
									<uni-icons type="minus"></uni-icons>
								</uni-col> -->
	<!-- 							<uni-col :span="6" align="center">
									<uni-icons type="link"></uni-icons>
								</uni-col>
								<uni-col :span="6" align="center">
									<uni-icons type="trash-filled"></uni-icons>
								</uni-col> -->
							</uni-row>

						</uni-card>
					</uni-col>
				</uni-row>
					<view style="width: 100%;">
						<uni-pagination @change="getPage" show-icon="true" :total="total" current="1" pageSize="10"
							style="float: left;margin-bottom: 10px;"></uni-pagination>
					</view>
			</uni-card>
		</scroll-view>

	</view>
</template>
<script>
	import {user_lists} from '@/utils/api.js'
	export default {
		data() {
			return {
				label: "all",
				fromsData: {
					Account: '',
				},
				data:{
					page:1,
				},
				total:0,
				equipment_data:[]
			}
		},
		onReady() {
			this.getEquipment()
		},
		methods: {
			getEquipment(){
				var that=this;
				uni.getStorage({
					key: 'token',
					success: function (res) {
						 that.token=res.data;
					}
				});
                user_lists(that.data,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.list.data;
						  that.total=data.list.total;
					  }
                 })	
				 

			},
			reset(){
				this.fromsData.Account='';
			},
			Inquire(){
				var that=this;
                user_lists(that.fromsData,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.list.data;
						  that.total=data.list.total;
					  }
                 })					
			},
			change(e) {
				console.log(this.label);
			},
			getPage(e){
				var that=this;
				this.data.page=e.current;
                user_lists(that.data,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.list.data;
						  that.total=data.list.total;
					  }
                 })	

			}
		}
	}
</script>
<style>
	.equipment_button {
		position: absolute;
		left: 50%;
		/* 定位父级的50% */
		top: 50%;
		transform: translate(-50%, -50%);
		/*自己的50% */
	}

	.scroll-Y {
		height: calc(100vh - 68px);
	}
</style>
