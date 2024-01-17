import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'App Home Page',
    component: HomePageComponent,
  },
  {
    path: 'tasks',
    title: 'App Tasks Page',
    component: TasksPageComponent,
  },
];
