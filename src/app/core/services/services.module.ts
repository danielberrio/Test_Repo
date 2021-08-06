import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './get-data/get-data.service';


@NgModule({
  providers: [
    GetDataService
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ServicesModule { }
