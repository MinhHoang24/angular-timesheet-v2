import { Component } from '@angular/core';
import { SwitchLanguage } from './switch-language/switch-language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchLanguage],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}