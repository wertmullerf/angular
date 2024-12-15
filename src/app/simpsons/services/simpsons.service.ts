import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  public characters: Character[] = [
    { id: uuid(), name: 'Children', age: 20, gender: 'male' },
    { id: uuid(), name: 'Bart', age: 18, gender: 'male' },
    { id: uuid(), name: 'Homero', age: 40, gender: 'male' },
    { id: uuid(), name: 'Lisa', age: 15, gender: 'female' },
  ];

  onFormSubmit(data: Character) {
    let newCharacter: Character = { id: uuid(), ...data };
    this.characters.push(newCharacter);
  }

  onDeleteByID(id: string) {
    //this.characters.splice(id, 1);

    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    console.log(this.characters);
  }
}
