import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/heroes.module';
import { SimpsonsModule } from './simpsons/simpsons.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroModule, SimpsonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
