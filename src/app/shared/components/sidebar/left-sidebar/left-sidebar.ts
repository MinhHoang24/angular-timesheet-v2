import { ChangeDetectorRef, Component } from '@angular/core';
import { LeftSidebarHeader } from './left-sidebar-header/left-sidebar-header';
import { LeftSidebarFooter } from './left-sidebar-footer/left-sidebar-footer';
import { LeftSidebarNav } from './left-sidebar-nav/left-sidebar-nav';
import { UserService } from '../../../../../core/services/UserServices/user.services';
import { AppBase } from '../../../../../core/app-base';

@Component({
  selector: 'app-left-sidebar',
  imports: [LeftSidebarHeader, LeftSidebarFooter, LeftSidebarNav],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css'
})
export class LeftSidebar {
  name: string = '';
  email: string = '';
  items: string[] = [];

  constructor (private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.GetAllPermissions();
  }

  getUserInfo(): void {
    this.userService.getUserInfo().subscribe(
      (response) => {
        console.log('thanh cong ',response);
        this.name = response.result.fullName;
        this.email = response.result.emailAddress;
        console.log('hi', this.name);
        console.log('hi', this.email);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Có lỗi xảy ra khi gọi API:', error);
      }
    );
  }

  GetAllPermissions(): void {
    this.userService.GetAllPermissions().subscribe(
      (response) => {
        console.log('thanh cong roles',response);
        this.items = response.result.items.map((displayName: { displayName: string }) => displayName.displayName);
        console.log('thanh cong display name', this.items);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Có lỗi xảy ra khi gọi API:', error);
      }
    );
  }
}
