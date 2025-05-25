export const APPCONSTANTS = {
    ENDPOINTS: {
        STUDENTS: '/students',
        STUDENTSNAME: '/students/name'
    },
    CONSTANTS: {
        EMPTYSTRING: '',
        WHITESPACE: ' ',
        TRUE: true,
        FALSE: false,
        EMPTYOBJECT: {},
        EMPTYARRAY: [],
        ZERO: 0,
        PASCALCASE: {
            CANCEL: 'Cancel',
            CONFIRM: 'Confirm',
            YES: 'Yes',
            NO: 'No',
            ADD: 'Add',
            UPDATE: 'Update',
            DELETE: 'Delete',
            CLOSE: 'Close',
            SUCCESS: 'Success',
            ERROR: 'Error'
        },
        UPPERCASE: {
            OK: 'OK'
        }
    },
    FUNCTIONS: {
        DEFAULT: 'Default',
        ARRAY: 'Array',
        TABLEACTIONS: 'actions'
    },
    COMPONENTS: {
        STUDENTLISTING: {
            ADDSTUDENT: 'AddStudent',
            EDITSTUDENT: 'EditStudent',
            VIEWSTUDENT: 'ViewStudent',
            DELETESTUDENT: 'DeleteStudent',
            STUDENTNAME: 'studentName',
            STUDENTAGE: 'studentAge',
            ADDSTUDENTDIALOGTITLE: 'Add Student',
            EDITSTUDENTDIALOGTITLE: 'Edit Student',
            VIEWSTUDENTDIALOGTITLE: 'View Student',
            DELETESTUDENTDIALOGTITLE: 'Delete Student',
            DELETESTUDENTDIALOGBODY: 'Are you sure you want to delete this record?',
            STUDENTNAMELABEL: 'Student Name:',
            STUDENTAGELABEL: 'Student Age:', 
        }
    },
    MATERIAL:{
        BUTTON:{
            STYLE: [
                'mat-raised-button',
                'mat-flat-button',
                'mat-stroked-button',
                'mat-button'
            ],
            TYPE: [
                'button',
                'submit',
                'reset'
            ]
        },
        TEXT: {
            TYPE: {
                TEXT: 'text',
                TEXTAREA: 'textarea' 
            }
        },
        ICON:{
            PERSONADD: 'person_add',
            MOREVERT: 'more_vert',
        }
    },
    TOASTER: {
        TYPE: {
            SUCCESS: 'success',
            ERROR: 'error'
        },
        MESSAGES: {
            SOMETHINGWENTWRONG: 'Something Went Wrong',
            RECORDADDEDSUCCESSFULLY: 'Record Added Succesfully',
            RECORDEDITEDSUCCESSFULLY: 'Record Updated Succesfully',
            RECORDDELETEDSUCCESSFULLY: 'Record Deleted Succesfully',
            RECORDSFETCHEDSUCCESSFULLY: 'Record/s Fetched Successfully'
        }
    },
    COLORS: {
        MATERIALINDIGO: '#3F51B5',
        WHITE: '#FFFFFF',
        BLACK: '#000000',
        GREEN: '#00FF00',
        RED: '#FF0000',
        CYAN: '#00FFFF',
        

    }
}