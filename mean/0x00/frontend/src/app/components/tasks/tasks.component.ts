import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  constructor(
    private jwtHelper: JwtHelperService,
    public toastr: ToastrService,
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
    if (form.value._id) {
      //console.log('update...');
      this.tasksService.updateTask(form.value).subscribe(
        (res) => {
          //console.log('res:', res);
          //this.getAllTasks();
          this.resetForm();
          this.toastr.success('Task updated', 'Success!');
        },
        (err) => {
          console.log('err:', err);
        }
      );
    } else {
      if (!form.value.name) {
        this.toastr.warning('Name is required.', 'Warning!');
      } else {
        console.log('create...');
        this.tasksService.createTask(form.value).subscribe(
          (res) => {
            //console.log('res:', res);
            //this.tasksService.tasks = res.allTasks;
            //this.getAllTasks();
            //form.reset();
            this.resetForm();
            this.toastr.success('Task created', 'Success!');
          },
          (err) => {
            console.log('err:', err);
          }
        );
      }
    }
  }

  getAllTasks() {
    this.tasksService.readAllTasks().subscribe(
      (res) => {
        //console.log('res:', res);
        this.tasksService.tasks = res.allTasks;
        //this.toastr.success('All tasks', 'Success!');
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  editTask(task: any) {
    //console.log('edit task...', task);
    this.tasksService.selectedTask = task;
  }

  removeTask(id: string | any) {
    //console.log('remove task...');
    this.tasksService.deleteTask(id).subscribe(
      (res) => {
        //console.log('res:', res);
        this.getAllTasks();
        this.toastr.success('Task deleted', 'Success!');
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.tasksService.selectedTask = {
      name: '',
      completed: false,
    };
    this.getAllTasks();
  }
}
