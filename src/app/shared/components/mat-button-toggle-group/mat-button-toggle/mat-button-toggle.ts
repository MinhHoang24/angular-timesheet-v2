import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mat-button-toggle',
  imports: [NgClass],
  templateUrl: './mat-button-toggle.html',
  styleUrl: './mat-button-toggle.css'
})
export class MatButtonToggle {
  @Input() toggleText: string = '';
  isChecked: boolean = false;
  @Output() toggleClick: EventEmitter<string> = new EventEmitter();

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }
}