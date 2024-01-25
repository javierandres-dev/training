import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient /* , withInterceptors */,
} from '@angular/common/http';

import { routes } from './app.routes';
//import { handleErrorInterceptor } from './interceptors/handle-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(/* withInterceptors([handleErrorInterceptor]) */),
  ],
};
