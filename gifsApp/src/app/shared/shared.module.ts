import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
