import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-app';
  numbers=[]
  changeTitle(){
    this.title="Welcome to angular 12"
  }
}
