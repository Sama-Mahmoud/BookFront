import { Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"home",
        component : HomeComponent
    },
    {
    path:"add",
    component : AddFormComponent
   },
  {
    path:`edit/:id`,
    component : EditFormComponent,

  },
  {
    path:"",
    component : HomeComponent
  },
  {
    path:"**",
    component : HomeComponent
  }
];
