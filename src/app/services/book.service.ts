import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBook, IBook } from '../Model/ibook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  
  baseUrl = "http://localhost:5183/api/Books";
  get(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.baseUrl);
  }
  getById(id:number): Observable<IBook>{
    return this.http.get<IBook>(`${this.baseUrl}/${id}`);
  }
  post(book:AddBook): Observable<any>{
    return this.http.post(`${this.baseUrl}`,book);
  }
  put(id:number,book:AddBook): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,book);
  }
  delete(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
