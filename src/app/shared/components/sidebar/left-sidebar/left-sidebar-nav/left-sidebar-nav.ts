import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarItemComponent } from "./left-sidebar-item/left-sidebar-item";

@Component({
  selector: 'app-left-sidebar-nav',
  imports: [RouterLink, SidebarItemComponent],
  templateUrl: './left-sidebar-nav.html',
  styleUrl: './left-sidebar-nav.css'
})
export class LeftSidebarNav {
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
