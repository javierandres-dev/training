import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  inData = {
    date: '2023-10-11T00:00:00.000Z',
    formattedDate: this.getFormattedDate('2023-10-11T00:00:00.000Z'),
  };

  getFormattedDate(date: string) {
    let newDate: any = new Date(date);
    newDate = newDate.toLocaleString();
    //console.log('newDate:', newDate);
    return newDate;
  }

  outData = {
    date: '',
  };

  handleSubmit() {
    console.log('outData.date:', this.outData.date);
  }
}
