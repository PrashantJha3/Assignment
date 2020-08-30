import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment7Component } from './assignment7/assignment7.component';
import { Assignment6Component } from './assignment6/assignment6.component';

const routes: Routes = [
{ path: 'Assignment1Component', component: Assignment1Component },
  { path: 'Assignment2Component', component: Assignment2Component },
  { path: 'Assignment3Component', component: Assignment3Component },
  { path: 'Assignment4Component', component: Assignment4Component },
  { path: 'Assignment5Component', component: Assignment5Component },
  { path: 'Assignment6Component', component: Assignment6Component },
  { path: 'Assignment7Component', component: Assignment7Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
