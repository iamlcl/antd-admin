import { request, config } from '../utils'
import {fetchAndNotification} from "./restfulService";
const { api } = config
const { dashboard } = api

export async function myCity (params) {
  return request({
    url: 'http://www.zuimeitianqi.com/zuimei/myCity',
    data: params,
  })
}

export async function queryWeather (params) {
  return request({
    url: 'http://www.zuimeitianqi.com/zuimei/queryWeather',
    data: params,
  })
}

export async function query (params) {
  return fetchAndNotification({
    url: dashboard,
    method: 'get',
    data: params,
  })
}
