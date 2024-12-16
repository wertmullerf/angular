import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  exports: [HomePageComponent],
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
  imports: [CommonModule],
})
export class GifsModule {}
