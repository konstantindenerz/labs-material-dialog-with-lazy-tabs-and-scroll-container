import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FooComponent
  ],
  exports: [FooComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class FooModule { }
