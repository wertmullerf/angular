import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-los-simpsons-page',
  templateUrl: 'main-page.html',
  standalone: false,
})
export class AppSimpsonsPage {
  characters: Character[] = [
    { name: 'Children', age: 20, gender: 'male' },
    { name: 'Bart', age: 18, gender: 'male' },
    { name: 'Homero', age: 40, gender: 'male' },
    { name: 'Lisa', age: 15, gender: 'female' },
  ];

  onFormSubmit(data: Character) {
    this.characters.push(data);
  }
}
