import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Joao';
  dis = false;

  changeName(){
    this.name = "DIO!";
    console.log(this.name);
    return;
  };
  toggleDisplay(){
    this.dis = !this.dis
  }
}
