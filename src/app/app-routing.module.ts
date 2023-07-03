import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoucleComponent } from './boucle/boucle.component';
import { CalculComponent } from './calcul/calcul.component';
import { CounterComponent } from './counter/counter.component';
import { FirstComponent } from './first/first.component';
import { RoomListComponent } from './room-list/room-list.component';
import { QuizzComponent } from './quizz/quizz.component';
const routes:Routes=[
  {path:'boucle',component: BoucleComponent},
  {path:'calcul',component: CalculComponent},
  {path:'rooms',component: RoomListComponent},
  {path:'counter',component: CounterComponent},
  {path:'',component: FirstComponent},
  {path:'quizz',component:QuizzComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
