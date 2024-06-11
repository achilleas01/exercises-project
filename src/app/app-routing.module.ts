import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppealAddReactiveComponent } from './appeal-add-reactive/appeal-add-reactive.component';
import { AppealAddTemplateComponent } from './appeal-add-template/appeal-add-template.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginTemplateDrivenComponent } from './login-template-driven/login-template-driven.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
//import { LoginComponent } from './global-components/login/login.component';
//import { ServicesExampleComponent } from './services-example/services-example.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    //Default redirection to login route.
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'logintemplate',
    component: LoginTemplateDrivenComponent
  },
  {
    path: 'appeal-add-template',
    component: AppealAddTemplateComponent
  },
  {
    path: 'modal-example',
    component: ModalExampleComponent
  },
  {
    path: 'reactive-login-example',
    component: LoginReactiveComponent
  },
  {
    path: 'reactive-appeal-add',
    component: AppealAddReactiveComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
