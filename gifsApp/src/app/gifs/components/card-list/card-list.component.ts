import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif-response.interface';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: 'card-list.component.html',
})
export class CardListComponent {
  @Input() gifs: Gif[] = [];
}
