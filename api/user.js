/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-03 14:49:50
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-21 11:38:43
 * @FilePath: /community-square/api/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = uni.$u.http;
import { API } from "./index";
import config from "@/common/config";
const THIRD_HEAD = "/api/third/MiniApp";

// 获取用户信息
export const getUserInfo = () => http.get(`${API.system}Users/get`);

//用户登录
export const userLogin = data =>
  http.post("/api/mongoOauth/Login", data, {
    params: {
      client_id: "admin",
      client_secret: 123456,
      scope: "all",
      grant_type: "password",
    },
  });

//发送验证码
export const sendCode = phone => http.get(`/api/mongoOauth/sendMsg/${phone}`);

//jsApi下单
export const userCreateOrder = data =>
  http.post(`${THIRD_HEAD}Pay/JsapiCreateOrder`, data);

//获取用户openid
export const getUserOpenId = code =>
  http.get(`${THIRD_HEAD}/${config.tenantId}/${code}/Openid`);
