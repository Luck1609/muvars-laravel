import * as axios from 'axios';


export default class HttpReq {

  constructor() {

    this.http = axios.create({});

    this.http.defaults.withCredentials = true;
    this.http.interceptors.request.use(
      function (config) {
        // console.log('Axios configuration information', config)
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
        let {  message,...data } = response.data;
        // console.log('SErver response from axios', data)
        
        return {...data, message};
      },
      function (error) {
console.log('Axios error object', error.response?.data)
        // let { message } = error.response?.data;

        // return {message, error: true}
// throw message
        // throw new Error(message ?? 'Unknown error occured')
      }
    );
  }

  post = async (url, payload, options = null) => await this.http.post(url, payload, options);

  // patch = async (url, payload, options = null) => console.log('options provided', options);
  patch = async (url, payload, options = null) => await this.http.patch(url, payload, options);

  get = async (url, options = null) => await this.http.get(url, options);

  delete = async (url) => await this.http.delete(url);
}
