import { CommonButtonModel } from "./CommonButtonModel";

export interface CommonDialogDataModel {
  showTitle: boolean;
  showBody: boolean;
  showFooter: boolean;
  title: string;
  body: string;
  condition: string;
  footerButtonArray: CommonButtonModel[],
  ngModel: any
}