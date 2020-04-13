import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { CreateTrekComponent } from './create-trek/create-trek.component';
import { LandingComponent } from './core/landing/landing.component';
import { DetailedTrekComponent } from '../app/detailed-trek/detailed-trek.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
    },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponentComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'trekCreate',
    pathMatch: 'full',
    component: CreateTrekComponent
  },
  {
    path: 'trek',
    pathMatch: 'full',
    component: CreateTrekComponent
  },
  {
    path: 'trekDetails/:productId',
    pathMatch: 'full',
    component: DetailedTrekComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
