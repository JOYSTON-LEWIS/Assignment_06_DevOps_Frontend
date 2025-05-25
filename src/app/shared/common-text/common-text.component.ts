import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { APPCONSTANTS } from '../../constants/app-constants';

@Component({
  selector: 'app-common-text',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './common-text.component.html',
  styleUrls: ['./common-text.component.scss']
})
export class CommonTextComponent {
  APPCONSTANTS = APPCONSTANTS;
  @Input() type: string = APPCONSTANTS.MATERIAL.TEXT.TYPE.TEXT;
  @Input() label: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input() placeholder: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input() rows: number = 3;
  @Input() disabled: boolean = APPCONSTANTS.CONSTANTS.FALSE;
  @Input() textInputted: any;
  @Output() textInputtedChange = new EventEmitter<string>();

  onInputChange(event: any) {
    this.textInputted = event?.target?.value ? event?.target?.value : APPCONSTANTS.CONSTANTS.EMPTYSTRING;
    this.textInputtedChange.emit(this.textInputted);
  }

}
