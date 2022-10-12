import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminComponent } from './pages/admin/admin_dash/admin.component';
import { CustomerDashComponent } from './pages/customer/customer-dash/customer-dash.component';
import { CusexedashboardComponent } from './pages/customerExecutive/cusexedashboard/cusexedashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    CustomerDashComponent,
    CusexedashboardComponent,
    ProfileComponent,
    SidebarComponent,
    CategoryComponent,
    AddCategoryComponent,
    ViewProductsComponent,
    AddProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
   FormsModule,
   HttpClientModule,
   MatCardModule,
   MatToolbarModule,
   MatIconModule,
   MatSnackBarModule,
   MatListModule,
   MatTableModule,
   MatSlideToggleModule,
   MatSelectModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
