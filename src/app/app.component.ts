import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ['home','about','contact'];
  constructor(){
    console.log('helloo constructor');
  }
  ngOnInit(){
    console.log('hello oninit')
  }
}
