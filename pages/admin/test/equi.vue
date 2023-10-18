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
						<uni-card :title="data.Account" :extra="'id：'+data.id" style="height: 170px;" >
						   <text>金币：{{data.amount*100}}</text><br>
						   <!-- <text>状态：正常</text><br> -->
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
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="input" message="成功消息" placeholder="请输入金币" :title="userinfo" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog mode="input" message="成功消息" placeholder="请输入金币" title="下分" :duration="2000" :before-close="true" @close="close2" @confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
	import {withdraw} from '@/utils/api.js'
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
				equipment_data:[],
				sj:[],
				check:'',
				userinfo:''
				
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
                withdraw(that.data,that.token).then(res=>{
					  if(res.status==1){	
						  uni.clearStorageSync();
						  uni.navigateTo({
							url:"/"
						  })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.data;
						  that.total=data.total; 
					  }
                 })	
				 

			},
			Increase(id){
				this.check=id;
				this.$refs.popup.open();
			},
			close() {
				this.$refs.popup.close()
			},
			close2() {
				this.$refs.popup2.close()
			},
			confirm(value) {
				// 输入框的值
				console.log(this.check)
				var that=this;
				var data={
					account:this.check,
					fee:value,
					type:'金币',
					increase:1,
				}
                transfer(data,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						   uni.showToast({
							 title: res.msg,
							 icon:'success'
						   })
						  this.getEquipment()
						  this.dljb()
						  this.$refs.popup.close()
					  }
                 })				
				
				
			},
			confirm2(value) {
				// 输入框的值
				console.log(this.check)
				var that=this;
				var data={
					account:this.check,
					fee:value,
					type:'金币',
					increase:0,
				}
                transfer(data,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						   uni.showToast({
							 title: res.msg,
							 icon:'success'
						   })
						  this.getEquipment()
						
						  this.$refs.popup2.close()
					  }
                 })				
				
				
			},
			reduce(id){
				this.check=id;
				this.$refs.popup2.open();				
			},
			reset(){
				this.fromsData.Account='';
			},
			Inquire(){
				var that=this;
                withdraw(that.fromsData,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.data;
						  that.total=data.total; 
					  }
                 })					
			},
			change(e) {
				console.log(this.label);
			},
			getPage(e){
				var that=this;
				this.data.page=e.current;
                withdraw(that.data,that.token).then(res=>{
					  if(res.status==1){	
						   uni.showToast({
							 title: res.msg,
							 icon:'error'
						   })		
					  }else{
						  var data=res.data;
						  that.equipment_data=data.data;
						  that.total=data.total; 
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
