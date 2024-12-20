import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Input() placeHolder: string = '';

  @Input() initialValue: string = '';
  @Output() onvalue = new EventEmitter<string>(); // Emitirá los cambios del input
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(700))
      .subscribe((search) => this.onvalue.emit(search));
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
  @ViewChild('txtInput') input!: ElementRef;

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }
}
