import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {TabBasedDialogModule} from "./tab-based-dialog/tab-based-dialog.module";
import {FooModule} from "./foo/foo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TabBasedDialogModule,
    FooModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
