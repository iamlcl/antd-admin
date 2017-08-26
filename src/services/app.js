import { request, config } from '../utils'
import {fetch, fetchAndNotification} from "./restfulService";
const { api } = config
const { user, userLogout, userLogin } = api

export async function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export async function query (params) {
  return await fetch({
    url: "/auth",
    method: 'get',
    data: params,
  })
}
