import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dataService = inject(DataService);

  allData: any[] = [];

  getAllData() {
    console.log('getAllData');
    this.dataService.getAll().subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.allData = res.items;
        console.log('success');
      } else {
        console.log('fail');
      }
    });
  }

  ngOnInit() {
    this.getAllData();
  }
}
