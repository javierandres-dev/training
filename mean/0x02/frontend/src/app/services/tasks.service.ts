import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CreateTask, Tasks } from '../interfaces/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = 'http://localhost:4100/regaloszzz';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    console.log('handleError...');
    console.log('error:', error);
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error\nCode: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('errorMessage:', errorMessage);
    return throwError(() => errorMessage);
  }

  createTask(task: CreateTask): Observable<any> {
    console.log('service createTask...');
    console.log('task:', task);
    return this.httpClient
      .post(this.apiUrl, JSON.stringify(task), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getTasks(): Observable<Tasks> {
    console.log('service getTasks...');
    /* const res = this.httpClient.get<Tasks>(this.apiUrl);
    res.subscribe((r) => console.log(r));
    console.log('res:', res);
    return res; */
    return this.httpClient
      .get<Tasks>(this.apiUrl)
      .pipe(catchError(this.handleError));
    //return this.httpClient.get<Tasks>(this.apiUrl);
  }
}
