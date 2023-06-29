import { Component } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {
  a:number=0;
  b:number=0;
  result(){
    return this.a+this.b
  }
}
