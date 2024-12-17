import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}
  /*
  ngOnInit() {
    this.data = this.gifsService.tagsHistory;
  }*/
  get data() {
    return this.gifsService.tagsHistory;
  }

  renderData(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
