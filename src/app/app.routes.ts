import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { CountriesModule } from './components/countries/countries.module';
import { MainComponent } from './components/main/main.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageTwoComponent } from './components/page-two/page-two.component';

// export const appRoutes:Routes=[
//     {path:"pageone",component:PageOneComponent, canActivate:[authGuard]},
//     {path:"lazy",loadChildren:"./components/countries/countries.module#CountriesModule",canLoad:[authGuard]},
// ]
export const appRoutes:Routes=[
    {path:"pageone",component:PageOneComponent, canDeactivate:[authGuard]},
    {path:"pagetwo",component:PageTwoComponent, canActivate:[authGuard]},
    {path:"pagethree",component:PageThreeComponent},
    {path:"lazy",loadChildren:()=>import("./components/countries/countries.module").then(m=>m.CountriesModule),canLoad:[authGuard]}
];
export const lazyRoutes:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)