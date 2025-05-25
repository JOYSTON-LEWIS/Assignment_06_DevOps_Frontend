import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonDialogDataModel } from '../../models/CommonDialogDataModel';
import { APPCONSTANTS } from '../../constants/app-constants';
import { StudentRecordComponent } from '../../components/student-record/student-record.component';
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'app-common-dialog',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule,
    StudentRecordComponent,
    CommonButtonComponent
  ],
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.scss']
})
export class CommonDialogComponent {
  APPCONSTANTS = APPCONSTANTS;

  constructor(
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommonDialogDataModel
  ) {}

  onDialogButtonClick(buttonObj: any)
  {
    this.dialogRef.close(
      {
        condition: this.data.condition, 
        button: buttonObj,
        data: this.data.ngModel
      }
    );
  }
}
