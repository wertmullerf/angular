import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simpsons-form',
  templateUrl: 'form.component.html',
  standalone: false,
})
export class SimpsonsFormComponent {
  @Output() formSubmit = new EventEmitter<{
    name: string;
    age: number;
    gender: string;
  }>();
  input1: string = '';
  input2!: number;
  input3: string = '';

  submit(e: Event) {
    e.preventDefault();
    console.log({ 1: this.input1, 2: this.input2, 3: this.input3 });
    this.formSubmit.emit({
      name: this.input1,
      age: this.input2,
      gender: this.input3,
    });
  }
}
