import { Component, Input } from '@angular/core';
import { SidebarItemComponent } from "./left-sidebar-item/left-sidebar-item";

@Component({
  selector: 'app-left-sidebar-nav',
  imports: [SidebarItemComponent],
  templateUrl: './left-sidebar-nav.html',
  styleUrl: './left-sidebar-nav.css'
})
export class LeftSidebarNav {
  @Input() items: string[] = [];

  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
