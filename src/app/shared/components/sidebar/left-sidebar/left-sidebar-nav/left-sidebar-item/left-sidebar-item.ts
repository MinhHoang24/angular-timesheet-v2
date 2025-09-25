import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeftSidebarMiniItem } from "./left-sidebar-mini-item/left-sidebar-mini-item";

@Component({
  selector: 'app-left-sidebar-item',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, LeftSidebarMiniItem, NgFor],
  templateUrl: './left-sidebar-item.html',
  styleUrl: './left-sidebar-item.css'
})
export class SidebarItemComponent {
  @Input() title: string = '';
  @Input() icon: string = '';

  @Input() items: string[] = [];

  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}