import { http } from "../index";

export default class MembersApi {
  /** 登录 */
  static queryList(data?: object) {
    return http.request("post", "/member/list", { data });
  }
}
