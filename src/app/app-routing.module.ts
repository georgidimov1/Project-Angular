import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { CreateTrekComponent } from './create-trek/create-trek.component';
import { LogoutComponent } from './logout/logout.component';
import { LandingComponent } from './core/landing/landing.component';


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
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent
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
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
