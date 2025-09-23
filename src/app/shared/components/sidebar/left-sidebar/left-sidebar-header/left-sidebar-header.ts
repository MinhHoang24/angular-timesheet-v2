import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left-sidebar-header',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './left-sidebar-header.html',
  styleUrl: './left-sidebar-header.css'
})
export class LeftSidebarHeader {
  @Input() name: string = '';
  @Input() email: string = '';
  
  isMenuOpen: boolean = false;

  constructor(private elementRef: ElementRef, private router: Router) {}

  openMenu(event: MouseEvent): void {
    event.stopPropagation();
    console.log('open menu logout');
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout(): void {
    console.log('log out');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
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