import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(
    private jwtHelper: JwtHelperService,
    public tasksService: TasksService
  ) {}

  ngOnInit(): void {
    //console.log(this.tasksService.readAllTasks());
    this.getAllTasks();
  }

  getUserName() {
    const token: any = localStorage.getItem('token');
    const decoded = this.jwtHelper.decodeToken(token);
    //console.log('decoded:', decoded);
    return decoded.name;
  }

  addTask(form: NgForm) {
    //console.log(form.value);
    this.tasksService.createTask(form.value).subscribe(
      (res) => {
        //console.log('res:', res);
        //this.tasksService.tasks = res.allTasks;
        this.getAllTasks();
        form.reset();
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  getAllTasks() {
    this.tasksService.readAllTasks().subscribe(
      (res) => {
        console.log('res:', res);
        this.tasksService.tasks = res.allTasks;
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
