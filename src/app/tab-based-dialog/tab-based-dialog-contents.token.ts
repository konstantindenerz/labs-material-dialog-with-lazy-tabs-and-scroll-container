import {InjectionToken} from "@angular/core";
import {TabContentModel} from "./tab-content-model";

export const TAB_BASED_DIALOG_CONTENTS = new InjectionToken<TabContentModel[]>('to access tab data');
