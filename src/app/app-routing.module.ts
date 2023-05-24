import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './service/dashboard.service';
import { first } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

const routes: Routes = [


  {
    path: "", component: HomeComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      {
        path: "profile", component: ProfileComponent, canActivate: [async () => {
          const dashboardService = inject(DashboardService)
          const router = inject(Router)
          const verify = await firstValueFrom(dashboardService.getUserDetails())
          return verify ? true : router.createUrlTree([''])
        }]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
