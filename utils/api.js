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
export function user_lists(data,contentType){
    return request.request({
        url:'/Agent/user_lists',
        method:'POST',
		data,
		contentType
    })
}