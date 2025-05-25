import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonTextComponent } from "../../shared/common-text/common-text.component";
import { APPCONSTANTS } from '../../constants/app-constants';

@Component({
  selector: 'app-student-record',
  standalone: true,
  imports: [
    CommonModule,
    CommonTextComponent
  ],
  templateUrl: './student-record.component.html',
  styleUrl: './student-record.component.scss'
})
export class StudentRecordComponent {
  APPCONSTANTS = APPCONSTANTS;
  @Input()
  studentNameLabel: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  studentNameTextInputted: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  isStudentNameTextDisabled: boolean = APPCONSTANTS.CONSTANTS.FALSE;
  @Input()
  studentAgeLabel: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  studentAgeTextInputted: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  isStudentAgeTextDisabled: boolean = APPCONSTANTS.CONSTANTS.FALSE;
  @Input()
  studentAssignedQuestionsLabel: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  studentAssignedQuestionsTextInputted: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  @Input()
  isStudentAssignedQuestionsTextDisabled: boolean = APPCONSTANTS.CONSTANTS.FALSE;
  @Output() studentNameTextInputtedChange = new EventEmitter<string>();
  @Output() studentAgeTextInputtedChange = new EventEmitter<string>();
  @Output() studentAssignedQuestionsTextInputtedChange = new EventEmitter<string>();

  onNameChange(event: any) {
    this.studentNameTextInputted = event;
    this.studentNameTextInputtedChange.emit(this.studentNameTextInputted);
  }

  onAgeChange(event: any) {
    this.studentAgeTextInputted = event;
    this.studentAgeTextInputtedChange.emit(this.studentAgeTextInputted);
  }

  onAssignedQuestionsChange(event: any) {
    this.studentAssignedQuestionsTextInputted = event;
    this.studentAssignedQuestionsTextInputtedChange.emit(this.studentAssignedQuestionsTextInputted);
  }

}
