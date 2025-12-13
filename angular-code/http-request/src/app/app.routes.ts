import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Post } from './pages/post/post';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/post',
    component: Post,
  },
];
