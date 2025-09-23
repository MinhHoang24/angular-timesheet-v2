import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left-sidebar-header',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './left-sidebar-header.html',
  styleUrl: './left-sidebar-header.css'
})
export class LeftSidebarHeader {
  isMenuOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  openMenu(event: MouseEvent): void {
    event.stopPropagation();
    console.log('open menu logout');
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout(): void {
    console.log('log out');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (
      this.isMenuOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isMenuOpen = false;
    }
  }
}