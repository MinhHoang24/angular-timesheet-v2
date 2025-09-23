import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginData } from '../../../../../core/models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  loginData: LoginData = {
    userNameOrEmailAddress: '',
    password: '',
    rememberClient: false
  };
  isFocused: { [key: string]: boolean } = { 'username': false, 'password': false };

  // constructor(private authService: AuthService, private router: Router) {}

  isFormValid(): boolean {
    return (
      this.loginData.userNameOrEmailAddress.trim() !== '' &&
      this.loginData.password.trim() !== '' &&
      this.loginData.rememberClient
    );
  }

  onFocus(field: string): void {
    this.isFocused[field] = true;
  }

  onBlur(field: string): void {
    this.isFocused[field] = false;
  }

  onParentClick(event: MouseEvent) {
    if (event.target !== document.getElementById('checkbox')) {
      console.log('Parent div clicked');
    }
  }

  onCheckboxClick(event: MouseEvent): void {
    event.stopPropagation();
    this.loginData.rememberClient = !this.loginData.rememberClient;
  }

  onLoginClick(event: MouseEvent): void {
    if (!this.isFormValid()) {
      event.preventDefault();
    } else {
      console.log('Login Data:', this.loginData);
      // call api
      // this.authService.login(this.loginData).subscribe(
      //   response => {
      //     console.log('login successful', response);

      //     if(response.accesToken) {
      //       localStorage.setItem('accessToken', response.accessToken);
      //     }
      //     this.router.navigate(['/']);
      //   },
      //   error => {
      //     console.log('login failed', error);
      //   }
      // );
    }
    event.preventDefault();
  }
}