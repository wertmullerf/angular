import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif-response.interface';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'gif-card',
  standalone: false,
  templateUrl: 'gifs-card.component.html',
})
export class GifCardComponent {
  @Input() gif!: Gif;
}
