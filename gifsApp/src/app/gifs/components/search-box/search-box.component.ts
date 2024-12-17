import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar:</h5>
    <input
      (keyup.enter)="submitForm()"
      type="text"
      placeholder="Buscar..."
      class="form-control"
      #inputGif
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('inputGif') inputTag!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}
  submitForm(): void {
    let tagValue = this.inputTag.nativeElement.value;
    this.gifsService.searchTag(tagValue);

    this.resetInput();
  }

  resetInput(): void {
    this.inputTag.nativeElement.value = '';
  }
}
