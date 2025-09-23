import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-sidebar-item',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, NgClass],
  templateUrl: './left-sidebar-item.html',
  styleUrl: './left-sidebar-item.css'
})
export class SidebarItemComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() routerLink: string[] = [];
  @Input() options: { label: string, icon: string, link: string[] }[] = [];

  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
