import * as axios from 'axios';


export default class HttpReq {

  constructor() {

    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`
    });

    this.http.defaults.withCredentials = true;
    this.http.interceptors.request.use(
      function (config) {
        return config
      },
      function (error) {
        return error.response;
      }
    );

    // This intercepts response before it is returned
    // attached required parameters to the request
    this.http.interceptors.response.use(
      function (response) {
        let { data, message } = response.data;
        
        return {data, message};
      },
      function (error) {
        let { message } = error.response.data;

        throw new Error(message)
      }
    );
  }

  post = async (url, payload, options = null) => await this.http.post(url, payload, options);

  // patch = async (url, payload, options = null) => console.log('options provided', options);
  patch = async (url, payload, options = null) => await this.http.patch(url, payload, options);

  get = async (url) => await this.http.get(url);

  delete = async (url) => await this.http.delete(url);
}
