import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { IndexComponent } from './components/index/index.component';
import { HomeHabitListComponent } from './components/home-habit-list/home-habit-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { APIConnecterService } from './services/apiconnecter.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from "./services/token-interceptor.service"

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    HomeHabitListComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [APIConnecterService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
