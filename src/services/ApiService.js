import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const httpClient = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    static registrarToken(token){
        if(token){
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }        
    }

    post(url, obj){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, obj);
    }

    put(url, obj){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, obj);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(requestUrl)
    }
}


export default ApiService;