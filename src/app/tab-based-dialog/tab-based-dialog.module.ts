import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBasedDialogComponent } from './tab-based-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {PortalModule} from "@angular/cdk/portal";



@NgModule({
  declarations: [
    TabBasedDialogComponent
  ],
  exports: [TabBasedDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    PortalModule,
  ]
})
export class TabBasedDialogModule { }
