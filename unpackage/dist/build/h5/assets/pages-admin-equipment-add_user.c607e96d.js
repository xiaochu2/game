import{_ as a,g as e,s as o,o as m,c as t,w as n,i as s,b as l,d,f as u,h as i,m as r,a6 as c}from"./index-3aafcff5.js";import{_ as f}from"./uni-easyinput.f957b256.js";import{_ as p,a as _}from"./uni-forms.4d469bab.js";import{_ as y}from"./uni-card.c6a17e55.js";import{_ as h,a as k}from"./uni-row.fb2bad2d.js";import{d as b}from"./api.8bb5723d.js";const F=a({data:()=>({data:{equi_name:"智能开关",line_status:"online",equi_key:"6848HUGN",equi_icon:"link"},equiFroms:{equi_name:"",icon:"",key:"JISN5412SW4D5A2W"},command:[],commandFroms:{accountname:"",pwd:""}}),onReady(){},methods:{createCommand(){var a=this;e({key:"token",success:function(e){a.token=e.data}}),b(a.commandFroms,a.token).then((a=>{1==a.status?o({title:a.msg,icon:"error"}):o({title:a.data,icon:"success"})}))}}},[["render",function(a,e,o,b,F,V){const x=u(i("uni-easyinput"),f),j=u(i("uni-forms-item"),p),w=u(i("uni-forms"),_),q=r,g=u(i("uni-card"),y),C=u(i("uni-col"),h),U=u(i("uni-row"),k),W=c,v=s;return m(),t(v,null,{default:n((()=>[l(W,{"scroll-y":"true",class:"scroll-Y"},{default:n((()=>[l(g,{title:"添加用户",style:{"min-height":"300px"}},{default:n((()=>[l(U,null,{default:n((()=>[l(C,{xs:24,md:9},{default:n((()=>[l(g,{title:""},{default:n((()=>[l(w,{modelValue:F.commandFroms,labelWidth:"80px"},{default:n((()=>[l(j,{label:"用户",name:"name"},{default:n((()=>[l(x,{type:"text",modelValue:F.commandFroms.accountname,"onUpdate:modelValue":e[0]||(e[0]=a=>F.commandFroms.accountname=a),placeholder:"请输入用户"},null,8,["modelValue"])])),_:1}),l(j,{label:"密码",name:"name"},{default:n((()=>[l(x,{type:"text",modelValue:F.commandFroms.pwd,"onUpdate:modelValue":e[1]||(e[1]=a=>F.commandFroms.pwd=a),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),l(q,{type:"primary",size:"mini",onClick:V.createCommand},{default:n((()=>[d("添加")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-0dbbbba8"]]);export{F as default};