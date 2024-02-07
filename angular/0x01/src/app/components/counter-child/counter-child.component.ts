import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  standalone: true,
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.css',
})
export class CounterChildComponent {
  @Input() messageParentToChild?: string;
  @Output() messageChildToParent = new EventEmitter<string>();

  sendMessageChildToParent() {
    this.messageChildToParent.emit('Hello from Child');
  }

  @Input() counter: number = 0;
  @Output() newEventEmitter = new EventEmitter<number>();

  incrementCount() {
    //this.newEventEmitter.emit((this.counter = this.counter + 1));
    this.newEventEmitter.emit(++this.counter);
    //this.newEventEmitter.emit(this.counter++);
  }
  decrementCount() {
    //this.newEventEmitter.emit((this.counter = this.counter - 1));
    this.newEventEmitter.emit(--this.counter);
    //this.newEventEmitter.emit(this.counter--);
  }
}
