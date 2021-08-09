import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '@interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private baseUrl: string = 'https://my-json-server.typicode.com/danielberrio/fake_database/post';
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
  ) { }

  public getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl, {headers: this.headers});
  }

}
