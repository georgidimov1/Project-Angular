import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
    {
    path: '',
    pathMatch: 'full',
    redirectTo: '/src/app/authentiction-module'
    },
    {
    path: 'login',
    component: LoginComponentComponent
    },
    {
    path: 'register',
    component: RegisterComponent
  }
]
}
];


export const AuthRoutingModule = RouterModule.forChild(routes);
