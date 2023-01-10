

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';  
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';

import { ProjectComponent } from './project/project.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';


import { AuthGuard } from './auth.guard';

const routes: Routes = [
 
  {  path: '',     redirectTo: '/aboutus',    pathMatch: 'full'   },
 

  {  path: 'aboutus',  component: AboutusComponent },

  {  path: 'events',   component: EventsComponent      },
 
  {  path: 'special',    canActivate: [AuthGuard],   component: SpecialEventsComponent  },
  
  { path: 'book-list', component: BookListComponent },

  { path: 'project', component: ProjectComponent, children: [
    { path: '', component: ProjectStartComponent },
    { path: 'new', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent },
    { path: ':id/edit', component: ProjectEditComponent },
  ] },
  {  path: 'login',   component: LoginComponent   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
