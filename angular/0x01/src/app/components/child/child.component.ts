import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  @Output() incrementCountEvent = new EventEmitter<number>();

  addItem() {
    this.addItemEvent.emit('🚀');
  }
  incrementCount() {
    this.incrementCountEvent.emit();
  }
}
