import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
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
