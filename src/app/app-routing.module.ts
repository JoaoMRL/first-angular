import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoucleComponent } from './boucle/boucle.component';
import { CalculComponent } from './calcul/calcul.component';
import { CounterComponent } from './counter/counter.component';
import { FirstComponent } from './first/first.component';
const routes:Routes=[
  {path:'boucle',component: BoucleComponent},
  {path:'calcul',component: CalculComponent},
  {path:'counter',component: CounterComponent},
  {path:'',component: FirstComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
