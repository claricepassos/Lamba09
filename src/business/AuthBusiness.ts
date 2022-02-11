import { UserRole } from "../model/User"
import { Authenticator } from "../services/Authenticator"

export class AuthBusiness {
    constructor(
        private authenticator:Authenticator
        
    ){}

    isAdmin(token: string): boolean{
        try {
            if(!token) return false
            
            const tokenData = this.authenticator.getData(token)
    
            if(tokenData.role != UserRole.ADMIN){
                return false
            }
    
            return true
            
        } catch (error: any) {
            return false
        }
    }

    isUser(token: string): boolean{
        try {
            if(!token) return false
            
            const tokenData = this.authenticator.getData(token)
    
            if(!tokenData.role){
                return false
            }
    
            return true
            
        } catch (error: any) {
            return false
        }
    }
}