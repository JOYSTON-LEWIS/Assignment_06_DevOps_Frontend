import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { APPCONSTANTS } from '../../constants/app-constants';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {
  APPCONSTANTS = APPCONSTANTS;
  @Input() label?: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input() matIcon?: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input() buttonStyle?: string = APPCONSTANTS.MATERIAL.BUTTON.STYLE[0];
  @Input() backgroundColor?: string = APPCONSTANTS.COLORS.MATERIALINDIGO;
  @Input() textColor?: string = APPCONSTANTS.COLORS.WHITE;
  @Input() type?: string = APPCONSTANTS.MATERIAL.BUTTON.TYPE[0];
  @Input() disabled?: boolean = APPCONSTANTS.CONSTANTS.FALSE;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
