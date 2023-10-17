import request from "@/common/requset.js"

// 轮播请求接口
export function apiGetBanner(data){
    return request.request({
        url:'/Agent/login',
        method:'POST',
        data
    })
}
export function tj(data,contentType){
    return request.request({
        url:'/Agent/tj',
        method:'POST',
		data,
		contentType
    })
}
export function withdraw(data,contentType){
    return request.request({
        url:'/Agent/withdraw',
        method:'POST',
		data,
		contentType
    })
}
export function review_withdrawal(data,contentType){
    return request.request({
        url:'/Agent/review_withdrawal',
        method:'POST',
		data,
		contentType
    })
}


export function user_lists(data,contentType){
    return request.request({
        url:'/Agent/user_lists',
        method:'POST',
		data,
		contentType
    })
}
export function transfer(data,contentType){
    return request.request({
        url:'/Agent/transfer',
        method:'POST',
		data,
		contentType
    })
}
export function register(data,contentType){
    return request.request({
        url:'/Agent/register',
        method:'POST',
		data,
		contentType
    })
}
export function userinfo(data,contentType){
    return request.request({
        url:'/Agent/userinfo',
        method:'POST',
		data,
		contentType
    })
}