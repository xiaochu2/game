import{q as e,_ as t,f as n,a8 as i,h as a,o as r,c as s,w as u,b as c,d as p,U as o,T as l,ag as g,a3 as h,a5 as d,a4 as x,e as m,m as _,ao as f,i as P}from"./index-3aafcff5.js";const I={en:{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"},es:{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"},fr:{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"},"zh-Hans":{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"},"zh-Hant":{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}},{t:k}=e(I);const v=t({name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:()=>[20,50,100,500]}},data:()=>({pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}),computed:{piecePerPage(){return this.piecePerPageText||k("uni-pagination.piecePerPage")},prevPageText(){return this.prevText||k("uni-pagination.prevText")},nextPageText(){return this.nextText||k("uni-pagination.nextText")},maxPage(){let e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper(){const e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize;let a=[],r=[],s=Math.ceil(n/i);for(let c=0;c<s;c++)a.push(c+1);r.push(1);const u=a[a.length-(t+1)/2];return a.forEach(((n,i)=>{(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=u?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||s-t<n)&&n<a[a.length-1]&&r.push(n)})),s>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=u?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=u||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick(){const e=document.querySelector("body");if(!e)return;const t="uni-pagination-picker-show";this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add(t):setTimeout((()=>e.classList.remove(t)),300)},selectPage(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{let e=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>e?this.currentIndex=e:this.currentIndex+=5)}},clickLeft(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}},[["render",function(e,t,I,k,v,S){const y=m,z=n(a("uni-icons"),i),T=_,C=f,b=P;return r(),s(b,{class:"uni-pagination"},{default:u((()=>[!0===I.showPageSize||"true"===I.showPageSize?(r(),s(C,{key:0,class:"select-picker",mode:"selector",value:v.pageSizeIndex,range:I.pageSizeRange,onChange:S.pickerChange,onCancel:S.pickerClick,onClick:S.pickerClick},{default:u((()=>[c(T,{type:"default",size:"mini",plain:!0},{default:u((()=>[c(y,null,{default:u((()=>[p(o(I.pageSizeRange[v.pageSizeIndex])+" "+o(S.piecePerPage),1)])),_:1}),c(z,{class:"select-picker-icon",type:"arrowdown",size:"12",color:"#999"})])),_:1})])),_:1},8,["value","range","onChange","onCancel","onClick"])):l("",!0),c(b,{class:"uni-pagination__total is-phone-hide"},{default:u((()=>[p("共 "+o(I.total)+" 条",1)])),_:1}),c(b,{class:g(["uni-pagination__btn",1===v.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":1===v.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:S.clickLeft},{default:u((()=>[!0===I.showIcon||"true"===I.showIcon?(r(),s(z,{key:0,color:"#666",size:"16",type:"left"})):(r(),s(y,{key:1,class:"uni-pagination__child-btn"},{default:u((()=>[p(o(S.prevPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"]),c(b,{class:"uni-pagination__num uni-pagination__num-flex-none"},{default:u((()=>[c(b,{class:"uni-pagination__num-current"},{default:u((()=>[c(y,{class:"uni-pagination__num-current-text is-pc-hide",style:{color:"#409EFF"}},{default:u((()=>[p(o(v.currentIndex),1)])),_:1}),c(y,{class:"uni-pagination__num-current-text is-pc-hide"},{default:u((()=>[p("/"+o(S.maxPage||0),1)])),_:1}),(r(!0),h(d,null,x(S.paper,((e,t)=>(r(),s(b,{key:t,class:g([{"page--active":e===v.currentIndex},"uni-pagination__num-tag tag--active is-phone-hide"]),onClick:n=>S.selectPage(e,t)},{default:u((()=>[c(y,null,{default:u((()=>[p(o(e),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),c(b,{class:g(["uni-pagination__btn",v.currentIndex>=S.maxPage?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":v.currentIndex===S.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:S.clickRight},{default:u((()=>[!0===I.showIcon||"true"===I.showIcon?(r(),s(z,{key:0,color:"#666",size:"16",type:"right"})):(r(),s(y,{key:1,class:"uni-pagination__child-btn"},{default:u((()=>[p(o(S.nextPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"])])),_:1})}],["__scopeId","data-v-1c1d7556"]]);export{v as _};