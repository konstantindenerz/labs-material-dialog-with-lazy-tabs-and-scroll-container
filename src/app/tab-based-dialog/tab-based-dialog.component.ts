import {Component, inject, OnInit} from '@angular/core';
import {TAB_BASED_DIALOG_CONTENTS} from "./tab-based-dialog-contents.token";

@Component({
  selector: 'app-tab-based-dialog',
  templateUrl: './tab-based-dialog.component.html',
  styleUrls: ['./tab-based-dialog.component.scss']
})
export class TabBasedDialogComponent implements OnInit {
  readonly tabs = inject(TAB_BASED_DIALOG_CONTENTS);
  constructor() { }

  ngOnInit(): void {
  }

}
