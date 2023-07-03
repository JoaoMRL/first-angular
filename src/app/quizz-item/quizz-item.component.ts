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
  @Output()
  choose= new EventEmitter();
  qStatus:string='';
  
  chooseAnswer(index:number){
    if (this.qStatus =='') {
      if (index === this.question.answer) {
        this.goodAnswer.emit();
        this.qStatus="true";
      }else{
        this.qStatus="false";
      }
      this.choose.emit();
    }
  }
}
