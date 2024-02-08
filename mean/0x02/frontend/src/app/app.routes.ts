import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { activateGuard } from './guards/activate.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gifts', component: GiftsComponent, canActivate: [activateGuard] },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];
