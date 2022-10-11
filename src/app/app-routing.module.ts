import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin_dash/admin.component';
import { CustomerDashComponent } from './pages/customer/customer-dash/customer-dash.component';
import { CusexedashboardComponent } from './pages/customerExecutive/cusexedashboard/cusexedashboard.component';
import { AdminGuard } from './services/admin.guard';
import { CustomerGuard } from './services/customer.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';

const routes: Routes = [
  
  {
    path:'',component:HomeComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AdminGuard],
    children:[{
      path:'profile',component:ProfileComponent
      },
    {
      path:'categories',component:CategoryComponent
    },
    {
      path:'add-categories',component:AddCategoryComponent
    }  
    ],
  },
  {
    path:'customer',component:CustomerDashComponent,canActivate:[CustomerGuard],
  },
  {
    path:'customerexecutive',component:CusexedashboardComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
