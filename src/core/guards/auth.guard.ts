import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Kiểm tra nếu accessToken có trong localStorage
    const accessToken = localStorage.getItem('accessToken');
    
    if (accessToken) {
      // Nếu đã đăng nhập, cho phép truy cập vào trang Home
      return true;
    } else {
      // Nếu chưa đăng nhập, chuyển hướng sang trang login
      this.router.navigate(['/login']);
      return false;
    }
  }
}