import { CommonModule } from '@angular/common';
import { AddBook } from './../Model/ibook';
import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  form:FormGroup;
  constructor(private fb : FormBuilder , private _bookser: BookService, private route :Router){
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', [Validators.required]],
      publishedYear: ['', [Validators.required ]],

    });
  }

  Add(){
    var AddBook :AddBook = {
      title : this.form.get('title')?.value,
      author : this.form.get('author')?.value,
      genre : this.form.get('genre')?.value,
      publishedYear : this.form.get('publishedYear')?.value
    }

    this._bookser.post(AddBook).subscribe(next=>{this.form.reset() ; alert('done')} ,error =>alert('fail') );

  }
  Home(){
    this.route.navigate(['home']);
  }
}
