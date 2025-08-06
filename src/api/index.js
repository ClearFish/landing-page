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