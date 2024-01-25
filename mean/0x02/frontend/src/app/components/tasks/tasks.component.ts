import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { CreateTask, Tasks } from '../../interfaces/tasks';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  public Tasks$!: Observable<Tasks>;
  public errorMessage!: string;
  public NewTask$!: Observable<any>;
  public successMessage!: string;

  newTask: CreateTask = {
    destinatario: 'pepita',
    nombre: 'house',
    entregado: false,
  };

  createOne(): void {
    /* console.log('createOne...');
    const res = this.tasksService.createTask(this.newTask);
    res.subscribe((r) => {
      console.log(r);
      this.successMessage = r.mensaje;
    });
    console.log('res:', res);
    this.NewTask$ = res; */
    /* this.NewTask$ = this.tasksService.createTask(this.newTask).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    ); */
    console.log('createOne...');
    /* this.NewTask$ = this.tasksService.createTask(this.newTask).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    ); */
    this.tasksService.createTask(this.newTask).subscribe((r) => {
      console.log(r);
      this.successMessage = r.mensaje;
    });
  }

  readAll(): void {
    console.log('readAll...');
    /* const res = this.tasksService.getTasks();
    res.subscribe((r) => console.log(r));
    console.log('res:', res);
    this.Tasks$ = res; */
    /* this.Tasks$ = this.tasksService.getTasks().pipe(
      catchError((error: string) => {
        //console.log('error:', error);
        this.errorMessage = error;
        //console.log('this.errorMessage:', this.errorMessage);
        return EMPTY;
      })
    ); */
    this.Tasks$ = this.tasksService.getTasks().pipe(
      catchError((error: string) => {
        //console.log('error:', error);
        this.errorMessage = error;
        //console.log('this.errorMessage:', this.errorMessage);
        return EMPTY;
      })
    );
  }

  readOne() {
    console.log('readOne...');
  }
  updateOne() {
    console.log('updateOne...');
  }
  deleteOne() {
    console.log('deleteOne...');
  }
}
