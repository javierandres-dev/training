import { Component } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  standalone: true,
  imports: [CounterChildComponent],
  templateUrl: './counter-parent.component.html',
  styleUrl: './counter-parent.component.css',
})
export class CounterParentComponent {
  messageFromChild: string = '';
  amount: number = NaN;

  receiveMessageFromChild($event: string) {
    this.messageFromChild = $event;
    console.log(`Message from Child to Parent: ${$event}`);
  }
  receiveEmit(num: number) {
    this.amount = num;
    console.log(`Receive event from child: ${num}`);
  }
}
