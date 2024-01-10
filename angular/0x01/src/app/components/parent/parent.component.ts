import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  items = new Array();
  count = 0;

  addItem(item: string) {
    console.log('item:', item);
    this.items.push(item);
  }

  incrementCount() {
    this.count++;
  }
}
