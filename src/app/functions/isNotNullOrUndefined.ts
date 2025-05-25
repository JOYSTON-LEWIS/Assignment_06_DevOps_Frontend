import { APPCONSTANTS } from "../constants/app-constants";

export function isNotNullOrUndefined(data: any, condition: string): boolean {
    if (condition == APPCONSTANTS.FUNCTIONS.DEFAULT) {
        return data != null && data != undefined && data != ''
    }
    else if (condition == APPCONSTANTS.FUNCTIONS.ARRAY) {
        return data != null && data != undefined && data != '' && Array.isArray(data) && data.length > 0
    }
    else {
        return APPCONSTANTS.CONSTANTS.FALSE;
    }
}