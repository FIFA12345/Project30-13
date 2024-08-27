import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core';
export const routes: Routes = [
{
    path: 'home',
    component: HomeComponent,
},
{
    path: 'about',
    component: AboutComponent,
},
{
    path: 'login',
    component: LoginComponent,
},
{
    path: 'register',
    component: RegisterComponent,
}
];