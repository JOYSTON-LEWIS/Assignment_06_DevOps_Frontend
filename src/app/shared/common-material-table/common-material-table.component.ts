import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { APPCONSTANTS } from '../../constants/app-constants';
import { isNotNullOrUndefined } from '../../functions/isNotNullOrUndefined';

@Component({
  selector: 'app-common-material-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './common-material-table.component.html',
  styleUrl: './common-material-table.component.scss'
})
export class CommonMaterialTableComponent {
  APPCONSTANTS = APPCONSTANTS;
  isNotNullOrUndefined = isNotNullOrUndefined;
  @Input()
  displayedColumns: string[] = [];
  @Input()
  actions: string[] = [];
  @Input()
  dataSource: any;
  @Output() tableOutputEmitter = new EventEmitter<{ action: string, rowData: any }>();

  getMatIcon(action: string) {
    switch (action) {
      case 'EditStudent':
        return 'edit';
      case 'ViewStudent':
        return 'visibility';
      case 'DeleteStudent':
        return 'delete';
      default:
        return APPCONSTANTS.CONSTANTS.EMPTYSTRING;
    }
  }

  getActionName(action: string) {
    switch (action) {
      case 'EditStudent':
        return 'Edit';
      case 'ViewStudent':
        return 'View';
      case 'DeleteStudent':
        return 'Delete';
      default:
        return APPCONSTANTS.CONSTANTS.EMPTYSTRING;
    }
  }

  getColumnName(column: string) {
    switch (column) {
      case 'studentDatabaseID':
        return 'Database ID';
      case 'studentName':
        return 'Name';
      case 'studentAge':
        return 'Age';
      case 'actions':
        return 'Actions';
      default:
        return APPCONSTANTS.CONSTANTS.EMPTYSTRING;
    }
  }

  tableActionEmitter(action: string, rowData: any) {
    this.tableOutputEmitter.emit(
      {
        action: action,
        rowData: rowData
      })
  }

  getColumnWidth(): string {
    let columnCount = this.displayedColumns.length;
    return columnCount > 0 ? `${100 / columnCount}%` : 'auto';
  }


}
