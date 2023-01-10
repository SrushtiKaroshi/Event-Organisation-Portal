import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event';
  loadedFeature = 'project';
  constructor(public _authService: AuthService){}
  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }
}
