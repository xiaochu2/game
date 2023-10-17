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
						<uni-card :title="data.Account" :extra="'id：'+data.id" style="height: 250px;" >
						   <text>金币：{{data.amount*100}}({{data.amount}}u)</text><br>
						   <text>银行名称：{{data.bank_name}}</text> <br>
						   <text>支行：{{data.bank_branch}}</text> <br>
						   <text>银行卡号：{{data.bank_account}}</text> <br>
						   <text v-if="data.state==1" >状态：<text style="color: cornflowerblue;">已通过</text></text>
						   <text v-else-if="data.state==2" >状态：<text style="color: crimson;">已拒绝</text></text>
						   <text v-else>状态：审核中</text><br>
						   <text>提现时间：{{data.createtime}}</text>
							<uni-row style="padding-top:10px;" v-if="data.state==0">
						<!-- 		<text>今日充值：1000 </text>
								
								
								<uni-col :span="6" align="center">
									<text>今日充值：1000 </text>
								</uni-col>
								<uni-col :span="6" align="center">
									<uni-icons type="minus"></uni-icons>
								</uni-col> -->
								
								<uni-col :span="6" align="center">
									<uni-icons type="checkmarkempty" @click="pass(data.id)"></uni-icons>
								</uni-col>
								<uni-col :span="6" align="center">
									<uni-icons type="closeempty" @click="reject(data.id)"></uni-icons>
								</uni-col> 
								
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
			<uni-popup-dialog mode="base" message="成功消息" :duration="2000" :before-close="true" content="确定拒绝审核吗" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="popup2" type="dialog">
			<uni-popup-dialog mode="base" message="成功消息" :duration="2000" :before-close="true" content="确定通过审核吗" @close="close2" @confirm="confirm2"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>
<script>
	import {withdraw,review_withdrawal} from '@/utils/api.js'
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
			reject(id){
				this.check=id;
				this.$refs.popup.open();
			},
			pass(id){
				this.check=id;
				this.$refs.popup2.open();
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
					id:this.check,
					state:2
				}
                review_withdrawal(data,that.token).then(res=>{
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
						  this.$refs.popup.close()
					  }
                 })				
				
				
			},
			confirm2(value) {
				// 输入框的值
				console.log(this.check)
				var that=this;
				var data={
					id:this.check,
					state:1
				}
                review_withdrawal(data,that.token).then(res=>{
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
