import { Component } from '@angular/core';
import { LeftSidebarHeader } from './left-sidebar-header/left-sidebar-header';
import { LeftSidebarFooter } from './left-sidebar-footer/left-sidebar-footer';
import { LeftSidebarNav } from './left-sidebar-nav/left-sidebar-nav';

@Component({
  selector: 'app-left-sidebar',
  imports: [LeftSidebarHeader, LeftSidebarFooter, LeftSidebarNav],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css'
})
export class LeftSidebar {

}
