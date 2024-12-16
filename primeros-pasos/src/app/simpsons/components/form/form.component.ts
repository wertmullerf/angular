import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simpsons-form',
  templateUrl: 'form.component.html',
  standalone: false,
})
export class SimpsonsFormComponent {
  character: Character = {
    name: '',
    age: 0,
    gender: '',
  };
  @Output() formSubmit = new EventEmitter<Character>();

  submit(e: Event) {
    e.preventDefault();
    if (this.character.name.length > 0 && this.character.gender.length > 0) {
      const characterCopy = { ...this.character }; // Hacemos una copia del objeto
      this.formSubmit.emit(characterCopy);
      this.resetForm();
    } else {
      return;
    }
  }

  resetForm(): void {
    this.character.name = '';
    this.character.age = 0;
    this.character.gender = '';
  }
}
