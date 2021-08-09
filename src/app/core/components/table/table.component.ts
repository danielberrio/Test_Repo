import { Component, OnInit } from '@angular/core';

// Interfaces
import { Post } from '@interfaces/post';

// Services
import { GetDataService } from '@services/get-data/get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableData: Post[] = [];
  public filteredData: Post[] = [];
  public searchInput: string = '';
  public loading = false;

  constructor(
    private dataService: GetDataService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  public getFilter(): void {
    this.loading = true;
    const data: Post[] = [];
    if (this.searchInput !== '' && this.searchInput != null && this.searchInput !== undefined) {
      this.filteredData = [];
      this.tableData.forEach(obj =>{
        if (this.searchInput !== '') {
          const authorMatch = obj.author.includes(this.searchInput);
          const genderMatch = obj.gender.includes(this.searchInput);
          const emailMatch = obj.email.includes(this.searchInput);
          const postMatch = obj.post.includes(this.searchInput);
          if (authorMatch || genderMatch || emailMatch || postMatch) {
            data.push(obj);
          }
        }
      });
    }
    this.filteredData = data;
    this.loading = false;
  }

  public clearFilter(): void {
    this.filteredData = this.tableData;
    this.searchInput = '';
  }

  private getData(): void {
    this.dataService.getData().subscribe(
      data => {
        this.tableData = data;
        this.filteredData = data;
      }
    );
  }
}
