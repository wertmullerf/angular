import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input() placeHolder: string = '';
  @Output() onvalue = new EventEmitter<string>(); // Emitirá los cambios del input
  @ViewChild('txtInput') input!: ElementRef;
  emitValue() {
    this.onvalue.emit(this.input.nativeElement.value); // Emite el valor al padre
  }
}
