import {Component, Injector} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TabBasedDialogComponent} from "./tab-based-dialog/tab-based-dialog.component";
import {TAB_BASED_DIALOG_CONTENTS} from "./tab-based-dialog/tab-based-dialog-contents.token";
import {FooComponent} from "./foo/foo.component";
import {ComponentPortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabBasedDialogRef?: MatDialogRef<TabBasedDialogComponent>;

  constructor(private readonly dialog: MatDialog, private readonly injector: Injector) {
  }

  show(): void {
    if (this.tabBasedDialogRef !== undefined) {
      this.tabBasedDialogRef.close();
      this.tabBasedDialogRef = undefined;
    }
    const injector = Injector.create({
      providers: [
        {
          provide: TAB_BASED_DIALOG_CONTENTS, useValue: [
            {key: 'third', component: new ComponentPortal(FooComponent)},
            {key: '42', component: new ComponentPortal(FooComponent)},
            {key: '5', component: new ComponentPortal(FooComponent)},
          ]
        }
      ], parent: this.injector
    });
    this.tabBasedDialogRef = this.dialog.open(TabBasedDialogComponent, {injector});
  }
}
