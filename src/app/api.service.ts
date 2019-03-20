
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  messages = []

  constructor(private http: HttpClient) { }

  getMessages() {
      this.http.get('http://localhost:3000/posts').subscribe(res => {
      this.messages = []
    })
  }
}

  // constructor( private http: Http) {}

