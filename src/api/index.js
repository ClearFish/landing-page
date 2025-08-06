import service from '@/utils/axios.js'

export function site(params) {
	return service({
		url: '/api/site',
		method: 'get',
		params
	})
}
export function getDomainLis(params) {
	return service({
		url: '/api/site/domainLis',
		method: 'get',
		params
	})
}