import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from './services/UserServices/user.services';

@Component({
  selector: 'app-app-base',
  imports: [],
  template: '',
})
export class AppBase {
  username: string = '';
  email: string = '';

  constructor (private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe(
      (response) => {
        console.log('thanh cong ',response);
        this.username = response.result.fullName;
        this.email = response.result.emailAddress;
        console.log('hi', this.username);
        console.log('hi', this.email);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Có lỗi xảy ra khi gọi API:', error);
      }
    );
  }
}