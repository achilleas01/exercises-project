import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { StateDecrPipe } from './state-decr.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginTemplateDrivenComponent } from './login-template-driven/login-template-driven.component';
import { AppealAddTemplateComponent } from './appeal-add-template/appeal-add-template.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import {CalendarModule} from 'primeng/calendar';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { AppealAddReactiveComponent } from './appeal-add-reactive/appeal-add-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StateDecrPipe,
    WelcomeComponent,
    LoginTemplateDrivenComponent,
    AppealAddTemplateComponent,
    ModalExampleComponent,
    CustomModalComponent,
    LoginReactiveComponent,
    AppealAddReactiveComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CalendarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
