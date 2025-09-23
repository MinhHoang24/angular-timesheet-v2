import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginData } from '../../models/login.model';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private baseService: BaseService) {}

  // Hàm đăng nhập
  login(loginData: LoginData): Observable<any> {
    return this.baseService.post<any>('/TokenAuth/Authenticate', loginData)
      .pipe(
        tap(response => {
          if (response?.result?.accessToken && response?.result?.userId) {
            // Lưu accessToken vào localStorage
            localStorage.setItem('accessToken', response.result.accessToken);
            localStorage.setItem('userId', response.result.userId);
          }
        })
      );
  }

  // Lấy accessToken từ localStorage
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
}