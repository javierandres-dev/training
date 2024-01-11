import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ChildComponent } from './components/child/child.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
  {
    path: '/child',
    title: 'App Child Page',
    component: ChildComponent,
  },
  {
    path: '/comments',
    title: 'App Comments Page',
    component: CommentsComponent,
  },
  {
    path: '/parent',
    title: 'App Parent Page',
    component: ParentComponent,
  },
  {
    path: '/user',
    title: 'App User Page',
    component: UserComponent,
  },
];
