import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    public tasksService: TasksService
  ) {}

  currentTask = {
    _id: '',
    name: '',
    completed: false,
    createdAt: '',
    updatedAt: '',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const taskId = param['id'];
      //console.log(taskId);
      this.getTask(taskId);
    });
  }

  getTask(id: string) {
    this.tasksService.readTask(id).subscribe(
      (res) => {
        //console.log('res:', res);
        this.currentTask = res.task;
        this.toastr.success('Read task', 'Success!');
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
