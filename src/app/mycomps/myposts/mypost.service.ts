

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// , map
import { MyPost } from './mypost';

// import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
}) 

export class MyPostService {
  // messages = []
  // users = []  
  // private productUrl = 'api/products/products02.json';
  private productUrl = 'http://localhost:3000/allposts';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<MyPost[]> {
    return this.http.get<MyPost[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data) + 'GetProducts data')),
      catchError(this.handleError)
    );
  }

  postMessage(message) {
    this.http.post(this.productUrl + '/post', message).subscribe(res => {
    })
  }

  // getProduct(id: number): Observable<IProduct | undefined> {
  //   return this.getProducts().pipe(
  //     map((products: IProduct[]) => products.find(p => p._id === id))
  //   );
  // }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  private initializeProduct(): MyPost {
    // Return an initialized object
    return {
      msg: null,
      author: null,
      // topic: null
    };
  }
}
