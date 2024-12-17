import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,

  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input() url!: string;
  @Input() alt: string = '';
  public isLoaded: boolean = false;

  onLoad(): void {
    this.isLoaded = true;
  }
}
