import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { RegisterComponent } from './components/home/modal/register/register.component';
import { LoginComponent } from './components/home/modal/login/login.component';
import { ModalComponent } from './components/home/modal/modal.component';
import { IndexComponent } from './components/home/modal/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { APIConnecterService } from './services/apiconnecter.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { HabitListComponent } from './components/dashboard/habit-list/habit-list.component';
import { HabitFormComponent } from './components/dashboard/habit-form/habit-form.component'
import { RewardsComponent } from './components/dashboard/rewards/rewards/rewards.component';
import { RewardPopupComponent } from './components/dashboard/rewards/reward-popup/reward-popup/reward-popup.component';
import { CreateHabitComponent } from './components/create-habit/create-habit/create-habit.component';
import { BrowseHabitsComponent } from './components/browse-habits/browse-habits/browse-habits.component';
import { HabitSubscribeComponent } from './components/habit-subscribe/habit-subscribe/habit-subscribe.component';
import { ViewMyHabitsComponent } from './components/view-my-habits/view-my-habits/view-my-habits.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    HabitListComponent,
    HabitFormComponent,
    RewardsComponent,
    RewardPopupComponent,
    CreateHabitComponent,
    BrowseHabitsComponent,
    HabitSubscribeComponent,
    ViewMyHabitsComponent,
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
