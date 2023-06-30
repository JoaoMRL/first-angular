import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-parma',
  templateUrl: './with-parma.component.html',
  styleUrls: ['./with-parma.component.css']
})
export class WithParmaComponent {
  @Input()
  name:string = 'Valeur par défaut';
}
