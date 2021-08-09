// Modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";


// Components
import { TableComponent } from '@components/table/table.component';

//Services
import { GetDataService } from "@services/get-data/get-data.service";

//Third Libraries Modules
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';


const routes: Routes = [
  {path: '', component: TableComponent}
];

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    CardModule,
    TableModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule
  ],
  providers: [
    GetDataService,
  ]
})
export class CoreModule { }
