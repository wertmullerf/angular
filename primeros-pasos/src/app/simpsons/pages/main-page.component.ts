import { Component } from '@angular/core';
import { SimpsonsService } from '../services/simpsons.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-los-simpsons-page',
  templateUrl: 'main-page.html',
  standalone: false,
})
export class AppSimpsonsPage {
  constructor(private smpService: SimpsonsService) {}

  get characters(): Character[] {
    return { ...this.smpService.characters };
  }

  onDeleteByID(id: string) {
    this.smpService.onDeleteByID(id);
  }

  onFormSubmit(data: Character) {
    this.smpService.onFormSubmit(data);
  }
}
