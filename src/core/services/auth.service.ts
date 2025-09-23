import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginData } from "../models/login.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    login(loginData: LoginData): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/TokenAuth/Authenticate`, loginData);
    }
}