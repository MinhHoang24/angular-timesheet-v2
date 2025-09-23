import { Component } from '@angular/core';
import { LeftSidebar } from './left-sidebar/left-sidebar';
import { AppBase } from '../../../../core/app-base';

@Component({
  selector: 'app-sidebar',
  imports: [LeftSidebar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
