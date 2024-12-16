import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSimpsonsPage } from './pages/main-page.component';
import { SimpsonsListComponent } from './components/list/list.component';
import { SimpsonsFormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  exports: [AppSimpsonsPage],
  declarations: [AppSimpsonsPage, SimpsonsListComponent, SimpsonsFormComponent],
  imports: [CommonModule, FormsModule],
})
export class SimpsonsModule {}
