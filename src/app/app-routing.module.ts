import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component"
import { RegisterComponent } from "./components/home/modal/register/register.component";
import { LoginComponent } from "./components/home/modal/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "./services/auth.guard";
import { CreateHabitComponent } from "./components/create-habit/create-habit/create-habit.component";
import { BrowseHabitsComponent } from "./components/browse-habits/browse-habits/browse-habits.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
    { path: "createhabit", component: CreateHabitComponent},
    { path: "browsehabits", component: BrowseHabitsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}