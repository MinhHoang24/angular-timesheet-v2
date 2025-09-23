import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { Observable } from "rxjs";
import { AuthService } from "../AuthServices/auth.service";
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private userId: string | null;
    constructor (private baseService: BaseService, private authService: AuthService) {
        this.userId = this.authService.getUserId();
    }
    
    getUserInfo(): Observable<any> {
        const id = this.userId;
        const params = new HttpParams().set('Id', id ?? '');
        const token = this.authService.getAccessToken();
        const headers = token 
            ? new HttpHeaders().set('Authorization', `Bearer ${token}`)
            : new HttpHeaders();
        return this.baseService.get<any>(`/services/app/User/Get`, { params, headers } );
    }
}