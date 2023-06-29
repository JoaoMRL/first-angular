import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    BoucleComponent,
    CounterComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
