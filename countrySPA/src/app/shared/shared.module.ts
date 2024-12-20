import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [SidebarComponent, SearchBoxComponent, LoaderComponent],
  exports: [SidebarComponent, SearchBoxComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
