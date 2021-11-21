import LocalStorageService from './LocalStorageService'
import ApiService from './ApiService'

export const AUTHENTICATED_USER = 'authenticated_user'
export const TOKEN = 'access_token'

export default class AuthService {

    static isAuthenticatedUser(){
        const token = LocalStorageService.getItem(TOKEN)
        if(!token){
            return false;
        }
    }

    static removeAuthenticatedUser(){
        LocalStorageService.removeItem(AUTHENTICATED_USER)
        LocalStorageService.removeItem(TOKEN);
    }

    static login(user, token){
        LocalStorageService.addItem(AUTHENTICATED_USER, user)
        LocalStorageService.addItem(TOKEN, token);
        ApiService.registrarToken(token)
    }

    static getAuthenticatedUser(){
        return LocalStorageService.getItem(AUTHENTICATED_USER);
    }

    static refreshSession(){
        const token  = LocalStorageService.getItem(TOKEN)
        const user = AuthService.getAuthenticatedUser()
        AuthService.login(user, token)
        return user;
    }

}