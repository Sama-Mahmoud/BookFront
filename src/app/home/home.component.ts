import { routes } from './../app.routes';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../Model/ibook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 books : IBook[] = [] 
 constructor(private bookService : BookService ,private route :Router){}
 ngOnInit(){
  this.bookService.get().subscribe(data=>this.books=data)
 }
 Delete(id : number){
  this.bookService.delete(id).subscribe();
  window.location.reload()
 }
 Add(){
  this.route.navigate(['add']);
 }
 edit(id:number){
  this.route.navigate(['edit', id]);
 }
}
