import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button-component/button-component";
import { MatButtonToggleGroup } from "../../../../shared/components/mat-button-toggle-group/mat-button-toggle-group";

@Component({
  selector: 'app-timesheet',
  imports: [ButtonComponent, MatButtonToggleGroup],
  templateUrl: './timesheet.html',
  styleUrl: './timesheet.css'
})
export class Timesheet {

}
