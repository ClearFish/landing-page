import service from '@/utils/request.js'

export function site(params) {
	return service({
		url: '/api/site',
		method: 'get',
		params
	})
}
export function getDomainList(params) {
	return service({
		url: '/api/site/domainList',
		method: 'get',
		params
	})
}
export function domainCheck(data) {
	return service({
		url: '/api/site/domainCheck',
		method: 'post',
		data
	})
}
// 游客访问聊天室
export function getIMGuest(params) {
	return service({
		url: '/addons/gameapi/im/Guest',
		method: 'get',
		params
	})
}