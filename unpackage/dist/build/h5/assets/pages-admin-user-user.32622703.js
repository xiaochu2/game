import{_ as a,s as e,o as l,c as t,w as n,i as u,d as s,e as i,H as d,I as o,J as r,h as f,j as m,p as _,S as p,v as c}from"./index-537f674e.js";import{_ as g}from"./uni-easyinput.4b89124a.js";import{_ as y,a as h}from"./uni-row.dc398f35.js";import{_ as x,a as w,b as j,c as b}from"./uni-table.0131fd6e.js";import{_ as D}from"./uni-pagination.23694f9a.js";import{_ as V}from"./uni-card.d4a7219d.js";const z=a({data:()=>({fromsData:{user_name:"",email:""}}),onReady(){},methods:{selectionData(a){console.log(a)},getPage(a){console.log(a),e({title:"即将展现"+a.current+"页",duration:1500})}}},[["render",function(a,e,z,C,S,k){const v=f(m("uni-easyinput"),g),I=f(m("uni-col"),y),P=f(m("uni-row"),h),U=_,H=u,J=f(m("uni-th"),x),R=f(m("uni-tr"),w),Y=f(m("uni-td"),j),q=f(m("uni-table"),b),A=f(m("uni-pagination"),D),B=f(m("uni-card"),V),E=p;return l(),t(H,null,{default:n((()=>[s(E,{"scroll-y":"true",class:"scroll-Y"},{default:n((()=>[s(B,null,{title:n((()=>[s(H,null,{default:n((()=>[s(P,null,{default:n((()=>[s(I,{xs:24,md:20},{default:n((()=>[s(P,{style:{"margin-top":"10px"}},{default:n((()=>[s(I,{xs:24,md:12},{default:n((()=>[s(v,{modelValue:S.fromsData.user_name,"onUpdate:modelValue":e[0]||(e[0]=a=>S.fromsData.user_name=a),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),s(I,{xs:0,md:2}),s(I,{xs:24,md:12},{default:n((()=>[s(v,{modelValue:S.fromsData.email,"onUpdate:modelValue":e[1]||(e[1]=a=>S.fromsData.email=a),placeholder:"请输入用户邮箱"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(I,{xs:24,md:4},{default:n((()=>[s(H,{class:"button_space"},{default:n((()=>[s(U,{type:"primary",size:"mini"},{default:n((()=>[i("查询")])),_:1}),s(U,{type:"warn",size:"mini",style:{"margin-left":"10px"}},{default:n((()=>[i("重置")])),_:1}),s(U,{type:"default",size:"mini",style:{"margin-left":"10px"}},{default:n((()=>[i("新增")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),actions:n((()=>[s(H,{style:{width:"100%"}},{default:n((()=>[s(A,{onChange:k.getPage,"show-icon":"true",total:"50",current:"1",style:{float:"left","margin-bottom":"10px"}},null,8,["onChange"])])),_:1})])),default:n((()=>[s(q,{border:"",stripe:"",type:"selection",onSelectionChange:k.selectionData},{default:n((()=>[s(R,null,{default:n((()=>[s(J,{align:"center",width:"30px"},{default:n((()=>[i("序号")])),_:1}),s(J,{align:"center"},{default:n((()=>[i("昵称")])),_:1}),s(J,{align:"center"},{default:n((()=>[i("用户名")])),_:1}),s(J,{align:"center"},{default:n((()=>[i("邮箱")])),_:1}),s(J,{align:"center"},{default:n((()=>[i("注册时间")])),_:1}),s(J,{align:"left"},{default:n((()=>[i("地址")])),_:1}),s(J,{align:"left",width:"150px"},{default:n((()=>[i("管理")])),_:1})])),_:1}),(l(),d(r,null,o(10,(a=>s(R,{key:a},{default:n((()=>[s(Y,null,{default:n((()=>[i(c(a),1)])),_:2},1024),s(Y,null,{default:n((()=>[i("用户"+c(a),1)])),_:2},1024),s(Y,null,{default:n((()=>[i("user"+c(a),1)])),_:2},1024),s(Y,null,{default:n((()=>[i("12345"+c(a),1)])),_:2},1024),s(Y,null,{default:n((()=>[i("2022-9-"+c(a),1)])),_:2},1024),s(Y,null,{default:n((()=>[i("北京市海淀区")])),_:1}),s(Y,null,{default:n((()=>[s(U,{type:"primary",size:"mini"},{default:n((()=>[i("修改")])),_:1}),s(U,{type:"warn",size:"mini"},{default:n((()=>[i("删除")])),_:1})])),_:1})])),_:2},1024))),64))])),_:1},8,["onSelectionChange"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-17a8db6a"]]);export{z as default};
