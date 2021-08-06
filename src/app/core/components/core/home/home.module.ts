import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from 'src/app/core/services/services.module';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ServicesModule,
    TableModule,
    MultiSelectModule
  ]
})
export class HomeModule { }
