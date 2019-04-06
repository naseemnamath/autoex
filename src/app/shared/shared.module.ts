import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
  	MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
