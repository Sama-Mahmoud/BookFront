import { routes } from './../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { AddBook, IBook } from '../Model/ibook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'] 
})
export class EditFormComponent implements OnInit{
  form!:FormGroup;
  id :number =0;
  book :IBook ={
    id: 0,
    title: '',
    author: '',
    genre: '',
    publishedYear: 0
  }
  constructor(private fb : FormBuilder , private _bookser: BookService,private actrout : ActivatedRoute , private route :Router){
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', [Validators.required]],
      publishedYear: ['', [Validators.required ]],

    });
  }
  ngOnInit(): void {
    this.actrout.params.subscribe(data=> this.id=+data['id'])
    console.log( this.id)
    this._bookser.getById(this.id).subscribe(data => {
      this.book = data;
      console.log('Book data:', this.book);
      this.form.patchValue({
        title: this.book.title,
        author: this.book.author,
        genre: this.book.genre,
        publishedYear: this.book.publishedYear
      });
      console.log('Form values after patch:', this.form.value);
    });

  }

  edit(){
    var AddBook :AddBook = {
      title : this.form.get('title')?.value,
      author : this.form.get('author')?.value,
      genre : this.form.get('genre')?.value,
      publishedYear : this.form.get('publishedYear')?.value
    }

    this._bookser.put(this.id,AddBook).subscribe(next=>{this.form.reset() ; alert('done')} , error =>alert('fail') );

  }

  Home(){
    this.route.navigate(['home']);
  }
}
