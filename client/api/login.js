import http from './http';
import URL from './urls'
import {getData, postData} from './fetch'

export default {
  login(params){
    return postData(URL.login,params)
  },
}