import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-simpsons-list',
  templateUrl: 'list.component.html',
  standalone: false,
})
export class SimpsonsListComponent {
  @Input() characterList!: Character[];
}
