import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointsService } from '../../services/endpoints.service';
import { CommonMaterialTableComponent } from '../../shared/common-material-table/common-material-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { isNotNullOrUndefined } from '../../functions/isNotNullOrUndefined';
import { APPCONSTANTS } from '../../constants/app-constants';
import { CommonDialogDataModel } from '../../models/CommonDialogDataModel';
import { CommonDialogComponent } from '../../shared/common-dialog/common-dialog.component';
import { CommonButtonComponent } from '../../shared/common-button/common-button.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrl: './student-listing.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CommonMaterialTableComponent,
    CommonButtonComponent
  ]
})
export class StudentListingComponent implements OnInit {
  APPCONSTANTS = APPCONSTANTS
  getStudentsResponse: any;
  studentListingDisplayedColumns: string[] = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
  studentListingActions: string[] = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
  studentListingDataSource: any[] = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
  studentListingSelectedAction: string = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
  studentListingRowData: any;
  studentDialogWidth: string = '30vw';
  studentDialogData: CommonDialogDataModel = {
    showTitle: APPCONSTANTS.CONSTANTS.TRUE,
    showBody: APPCONSTANTS.CONSTANTS.TRUE,
    showFooter: APPCONSTANTS.CONSTANTS.TRUE,
    title: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
    body: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
    condition: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
    footerButtonArray: [],
    ngModel: {
      studentNameLabel: APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTNAMELABEL,
      studentNameTextInputted: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
      isStudentNameDisabled: APPCONSTANTS.CONSTANTS.FALSE,
      studentAgeLabel: APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTAGELABEL,
      studentAgeTextInputted: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
      isStudentAgeDisabled: APPCONSTANTS.CONSTANTS.FALSE,
      studentAssignedQuestionsLabel: APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTASSIGNEDQUESTIONSLABEL,
      studentAssignedQuestionsTextInputted: APPCONSTANTS.CONSTANTS.EMPTYSTRING,
      isStudentAssignedQuestionsDisabled: APPCONSTANTS.CONSTANTS.FALSE,
    }
  }
  constructor(
    private endpointsService: EndpointsService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onInitialLoad();
  }

  onInitialLoad() {
    this.getAllStudentData();
  }

  getAllStudentData() {
    this.studentListingDataSource = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
    this.endpointsService.getStudents().subscribe({
      next: data => {
        this.getStudentsResponse = data;
        if (isNotNullOrUndefined(this.getStudentsResponse, APPCONSTANTS.FUNCTIONS.ARRAY)) {
          let finalStudentsArray: any[] = [];
          this.studentListingDisplayedColumns = [
            APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTNAME,
            // APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTAGE,
            APPCONSTANTS.COMPONENTS.STUDENTLISTING.STUDENTASSIGNEDQUESTIONS,
            APPCONSTANTS.FUNCTIONS.TABLEACTIONS
          ];
          this.studentListingActions = [
            APPCONSTANTS.COMPONENTS.STUDENTLISTING.EDITSTUDENT,
            APPCONSTANTS.COMPONENTS.STUDENTLISTING.VIEWSTUDENT,
            APPCONSTANTS.COMPONENTS.STUDENTLISTING.DELETESTUDENT
          ];
          this.getStudentsResponse.forEach((studentObject: any) => {
            let finalObject = {
              studentDatabaseID: studentObject._id,
              studentName: studentObject.name,
              studentAge: studentObject.age ? studentObject.age : APPCONSTANTS.CONSTANTS.ZERO,
              studentAssignedQuestions: studentObject.assignedQuestions
            }
            finalStudentsArray.push(finalObject);
          })
          this.studentListingDataSource = finalStudentsArray;
          this.showToaster(APPCONSTANTS.TOASTER.TYPE.SUCCESS, APPCONSTANTS.TOASTER.MESSAGES.RECORDSFETCHEDSUCCESSFULLY, APPCONSTANTS.CONSTANTS.PASCALCASE.SUCCESS);
        }
        else {
          this.studentListingDisplayedColumns = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
          this.studentListingActions = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
          this.studentListingDataSource = APPCONSTANTS.CONSTANTS.EMPTYARRAY;
          this.showToaster(APPCONSTANTS.TOASTER.TYPE.INFO, APPCONSTANTS.TOASTER.MESSAGES.NORECORDSFOUND, APPCONSTANTS.CONSTANTS.PASCALCASE.INFO);
        }
      },
      error: (err) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.ERROR, APPCONSTANTS.TOASTER.MESSAGES.SOMETHINGWENTWRONG, APPCONSTANTS.CONSTANTS.PASCALCASE.ERROR);
      }
    });
  }

  studentListingTableOutputEvent(event: any) {
    this.studentListingRowData = event.rowData;
    this.studentListingSelectedAction = event.action;
    this.studentDialogData.condition = this.studentListingSelectedAction;
    if (this.studentListingSelectedAction == APPCONSTANTS.COMPONENTS.STUDENTLISTING.EDITSTUDENT) {
      this.studentDialogData.title = APPCONSTANTS.COMPONENTS.STUDENTLISTING.EDITSTUDENTDIALOGTITLE;
      this.studentDialogData.body = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
      this.studentDialogData.footerButtonArray = [
        {
          label: APPCONSTANTS.CONSTANTS.PASCALCASE.CLOSE,
          backgroundColor: APPCONSTANTS.COLORS.WHITE,
          textColor: APPCONSTANTS.COLORS.BLACK
        },
        {
          label: APPCONSTANTS.CONSTANTS.PASCALCASE.UPDATE,
          backgroundColor: APPCONSTANTS.COLORS.GREEN,
          textColor: APPCONSTANTS.COLORS.BLACK
        }
      ];
      this.studentDialogData.ngModel.studentNameTextInputted = this.studentListingRowData.studentName;
      this.studentDialogData.ngModel.studentAgeTextInputted = this.studentListingRowData.studentAge;
      this.studentDialogData.ngModel.studentAssignedQuestionsTextInputted = this.studentListingRowData.studentAssignedQuestions;
      this.openCloseDialog();
    }
    if (this.studentListingSelectedAction == APPCONSTANTS.COMPONENTS.STUDENTLISTING.VIEWSTUDENT) {
      this.studentDialogData.title = APPCONSTANTS.COMPONENTS.STUDENTLISTING.VIEWSTUDENTDIALOGTITLE;
      this.studentDialogData.body = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
      this.studentDialogData.footerButtonArray = [
        {
          label: APPCONSTANTS.CONSTANTS.PASCALCASE.CLOSE,
          backgroundColor: APPCONSTANTS.COLORS.WHITE,
          textColor: APPCONSTANTS.COLORS.BLACK
        }
      ];
      this.studentDialogData.ngModel.studentNameTextInputted = this.studentListingRowData.studentName;
      this.studentDialogData.ngModel.isStudentNameDisabled = APPCONSTANTS.CONSTANTS.TRUE;
      this.studentDialogData.ngModel.studentAgeTextInputted = this.studentListingRowData.studentAge;
      this.studentDialogData.ngModel.isStudentAgeDisabled = APPCONSTANTS.CONSTANTS.TRUE;
      this.studentDialogData.ngModel.studentAssignedQuestionsTextInputted = this.studentListingRowData.studentAssignedQuestions;
      this.studentDialogData.ngModel.isStudentAssignedQuestionsDisabled = APPCONSTANTS.CONSTANTS.TRUE;
      this.openCloseDialog();
    }
    if (this.studentListingSelectedAction == APPCONSTANTS.COMPONENTS.STUDENTLISTING.DELETESTUDENT) {
      this.studentDialogData.title = APPCONSTANTS.COMPONENTS.STUDENTLISTING.DELETESTUDENTDIALOGTITLE;
      this.studentDialogData.body = APPCONSTANTS.COMPONENTS.STUDENTLISTING.DELETESTUDENTDIALOGBODY;
      this.studentDialogData.footerButtonArray = [
        {
          label: APPCONSTANTS.CONSTANTS.PASCALCASE.CLOSE,
          backgroundColor: APPCONSTANTS.COLORS.WHITE,
          textColor: APPCONSTANTS.COLORS.BLACK
        },
        {
          label: APPCONSTANTS.CONSTANTS.PASCALCASE.DELETE,
          backgroundColor: APPCONSTANTS.COLORS.RED,
          textColor: APPCONSTANTS.COLORS.WHITE
        }
      ];
      this.openCloseDialog();
    }
  }

  onAddStudent() {
    this.studentListingSelectedAction = APPCONSTANTS.COMPONENTS.STUDENTLISTING.ADDSTUDENT;
    this.studentDialogData.title = APPCONSTANTS.COMPONENTS.STUDENTLISTING.ADDSTUDENTDIALOGTITLE;
    this.studentDialogData.body = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
    this.studentDialogData.condition = this.studentListingSelectedAction
    this.studentDialogData.footerButtonArray = [
      {
        label: APPCONSTANTS.CONSTANTS.PASCALCASE.CLOSE,
        backgroundColor: APPCONSTANTS.COLORS.WHITE,
        textColor: APPCONSTANTS.COLORS.BLACK
      },
      {
        label: APPCONSTANTS.CONSTANTS.PASCALCASE.ADD,
        backgroundColor: APPCONSTANTS.COLORS.GREEN,
        textColor: APPCONSTANTS.COLORS.BLACK
      }
    ];
    this.openCloseDialog();
  }

  openCloseDialog(): void {
    const data = this.studentDialogData;
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: this.studentDialogWidth,
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.condition == APPCONSTANTS.COMPONENTS.STUDENTLISTING.ADDSTUDENT && result.button.label == APPCONSTANTS.CONSTANTS.PASCALCASE.ADD) {
        this.onAddStudentApiCalled();
      }
      if (result.condition == APPCONSTANTS.COMPONENTS.STUDENTLISTING.EDITSTUDENT && result.button.label == APPCONSTANTS.CONSTANTS.PASCALCASE.UPDATE) {
        this.onEditStudentApiCalled();
      }
      if (result.condition == APPCONSTANTS.COMPONENTS.STUDENTLISTING.DELETESTUDENT && result.button.label == APPCONSTANTS.CONSTANTS.PASCALCASE.DELETE) {
        this.onDeleteStudentApiCalled();
      }
      this.studentDialogData.ngModel.studentNameTextInputted = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
      this.studentDialogData.ngModel.studentAgeTextInputted = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
      this.studentDialogData.ngModel.studentAssignedQuestionsTextInputted = APPCONSTANTS.CONSTANTS.EMPTYSTRING;
      this.studentDialogData.ngModel.isStudentNameDisabled = APPCONSTANTS.CONSTANTS.FALSE;
      this.studentDialogData.ngModel.isStudentAgeDisabled = APPCONSTANTS.CONSTANTS.FALSE;
      this.studentDialogData.ngModel.isStudentAssignedQuestionsDisabled = APPCONSTANTS.CONSTANTS.FALSE;
    });
  }

  onAddStudentApiCalled() {
    let data = {
      name: this.studentDialogData.ngModel?.studentNameTextInputted,
      age: this.studentDialogData.ngModel?.studentAgeTextInputted,
      assignedQuestions: this.studentDialogData.ngModel?.studentAssignedQuestionsTextInputted
    }
    this.endpointsService.createStudent(data).subscribe({
      next: (response: any) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.SUCCESS, APPCONSTANTS.TOASTER.MESSAGES.RECORDADDEDSUCCESSFULLY, APPCONSTANTS.CONSTANTS.PASCALCASE.SUCCESS);
        this.getAllStudentData();
      },
      error: (err) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.ERROR, APPCONSTANTS.TOASTER.MESSAGES.SOMETHINGWENTWRONG, APPCONSTANTS.CONSTANTS.PASCALCASE.ERROR);
      }
    });
  }

  onEditStudentApiCalled() {
    let id = this.studentListingRowData.studentDatabaseID;
    let data = {
      name: this.studentDialogData.ngModel?.studentNameTextInputted,
      age: this.studentDialogData.ngModel?.studentAgeTextInputted,
      assignedQuestions: this.studentDialogData.ngModel?.studentAssignedQuestionsTextInputted
    }
    this.endpointsService.updateStudent(id, data).subscribe({
      next: (response: any) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.SUCCESS, APPCONSTANTS.TOASTER.MESSAGES.RECORDEDITEDSUCCESSFULLY, APPCONSTANTS.CONSTANTS.PASCALCASE.SUCCESS);
        this.getAllStudentData();
      },
      error: (err) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.ERROR, APPCONSTANTS.TOASTER.MESSAGES.SOMETHINGWENTWRONG, APPCONSTANTS.CONSTANTS.PASCALCASE.ERROR);
      }
    });
  }

  onDeleteStudentApiCalled() {
    let id = this.studentListingRowData.studentDatabaseID;
    this.endpointsService.deleteStudent(id).subscribe({
      next: (response: any) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.SUCCESS, APPCONSTANTS.TOASTER.MESSAGES.RECORDDELETEDSUCCESSFULLY, APPCONSTANTS.CONSTANTS.PASCALCASE.SUCCESS);
        this.getAllStudentData();
      },
      error: (err) => {
        this.showToaster(APPCONSTANTS.TOASTER.TYPE.ERROR, APPCONSTANTS.TOASTER.MESSAGES.SOMETHINGWENTWRONG, APPCONSTANTS.CONSTANTS.PASCALCASE.ERROR);
      }
    });
  }

  showToaster(type: string, title: string, message: string) {
    if (type == APPCONSTANTS.TOASTER.TYPE.SUCCESS) {
      this.toastr.success(title, message);
    }
    if (type == APPCONSTANTS.TOASTER.TYPE.ERROR) {
      this.toastr.error(title, message);
    }
    if (type == APPCONSTANTS.TOASTER.TYPE.INFO) {
      this.toastr.info(title, message);
    }
  }

}


