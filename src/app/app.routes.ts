import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path : '' , redirectTo:'users' , pathMatch:'full'
  },
    {
        path:'users' , loadComponent:()=>import('../components/users-list/users-list.component').then((m)=>m.UsersListComponent) , title:'users'
    } ,
    {
        path:'userDetails/:id' , loadComponent:()=>import('../components/user-details/user-details.component').then((m)=>m.UserDetailsComponent) , title:'user-details'
    }
];
