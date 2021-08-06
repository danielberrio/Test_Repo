import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';
import { Post } from 'src/app/core/models/post';
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Post[] = [];

  constructor(
    private service: GetDataService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.service.getData().subscribe(
      data => {
        this.data = data;
        console.log('data: ', this.data);
      }
    );
  }

}
