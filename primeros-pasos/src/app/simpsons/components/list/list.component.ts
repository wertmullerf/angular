import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-simpsons-list',
  templateUrl: 'list.component.html',
  standalone: false,
})
export class SimpsonsListComponent {
  @Input() characterList!: Character[];
  @Output() deleteID = new EventEmitter<string>();
  deleteById(id?: string): void {
    if (!id) return;
    this.deleteID.emit(id);
  }
}
