import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
  //return next(req);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // console.log('error:', error);
      let errorMessage: string = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error\nCode: ${error.status}\nMessage: ${error.message}`;
      }
      // console.log('errorMessage:', errorMessage);
      return throwError(() => errorMessage);
    })
  );
};
