import { Component } from '@angular/core';
import { Quizz } from '../entities';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  score:number=0;
  current:number=0;
  Questions:Quizz[]=[
    {question:"Les dinosaures existent il encore de nos jours ?",options:['oui','non'],answer:0},
    {question:"Quel est l'animal terrestre le plus grand au monde ?",options:['Elephant','Giraffe','Baleine Bleu','Boa Constrictor'],answer:0},
    {question:"Est ce que tout les espèces de veuve noir dévore leur partenaire ?",options:['oui','non'],answer:1},
    {question:"Quel groupe a interpreter All Star(chanson de Schreck)?",options:['Queen','Beatle','Smash Mouth'],answer:2},
  ];
  
  upScore(){
    this.score++;
  }
  nextQ(){
    this.current++;
  }
  reset(){
    this.score=0
    this.current=0
  }
}
