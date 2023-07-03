import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quizz } from '../entities';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent {
  @Input({required:true})
  question:Quizz;
  @Output()
  goodAnswer= new EventEmitter();
  msg:string='';
  qStatus:string;
  
  chooseAnswer(index:number){
    if (index === this.question.answer) {
      this.goodAnswer.emit();
      this.qStatus="true";
    }else{
      this.qStatus="false";
    }
  }
}
