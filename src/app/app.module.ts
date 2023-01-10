import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { BookShoppingListService } from './book-list/bookshopping-list.service';

import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectItemComponent } from './project/project-list/project-item/project-item.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';
import { ProjectService } from './project/project.service';
import { DropdownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    AboutusComponent,
    BookListComponent,
    BookEditComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectStartComponent,
    DropdownDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    AlertModule.forRoot()
  ],
  providers: [BookShoppingListService, ProjectService, AuthService, EventService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
