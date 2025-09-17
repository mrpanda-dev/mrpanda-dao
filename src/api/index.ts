import Axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type Method,
} from "axios";
export type RequestMethods = Extract<
  Method,
  "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>;

//Axios请求主体
class ZHttp {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  static setHttpConfig() {
    return {
      // 请求超时时间
      baseURL: "配置基础url",
    };
  }

  /** Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(
    this.setHttpConfig()
  );

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    ZHttp.axiosInstance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        const isFileUpload = Object.values(config.data || {}).some(
          (item: any) =>
            item instanceof File ||
            item instanceof Blob ||
            (typeof item === "string" && item.startsWith("data:image"))
        );
        if (isFileUpload) {
          config.headers["Content-Type"] = "multipart/form-data";
        } else {
          config.headers["Content-Type"] = "application/json";
        }

        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    // 添加响应拦截器
    ZHttp.axiosInstance.interceptors.response.use(
      function (response) {
        const dataAxios = response.data;
        const { code } = dataAxios;
        if (code === undefined) {
          return dataAxios;
        } else if (code == 40000) {
          // message.error("登录已过期，请重新登录");
          //   const counter = useCounterStore();
          //   counter.WallentConnectMask = true;
          // counter.clearLogin();
          // SysRouter.router.push({
          //     path: "/",
          // });
        } else {
          return dataAxios;
          /* switch (code) {
            case 200:
              return dataAxios.data;
            default:
              message.error(dataAxios.tip);
              return Promise.reject(new Error(dataAxios.tip));
          } */
        }
      },
      function (error) {
        if (error.response.data.code == 40000) {
          // message.error("登录已过期，请重新登录");
          //   const counter = useCounterStore();
          //   counter.WallentConnectMask = true;
          // SysRouter.router.push({
          //     path: "/",
          // });
        }
        return Promise.reject(error);
      }
    );
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
    };

    // 单独处理自定义请求/响应回调
    return new Promise((resolve, reject) => {
      ZHttp.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export const http = new ZHttp();
