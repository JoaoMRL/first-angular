import { Component } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent {
  tab =["Joao","Jean",'Jojo',"Juan"]

  addItem(item:string){
    this.tab.push(item);
  }
}
