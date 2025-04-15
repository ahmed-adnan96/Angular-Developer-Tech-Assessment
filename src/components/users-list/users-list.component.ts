import { Component, input, Input, NgModule, OnDestroy, OnInit ,  } from '@angular/core';
import { UserServiceService } from '../../core/services/user-service.service';
import { User } from '../../core/interfaces/user';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users-list',
  imports: [RouterLink ,FormsModule  , CommonModule ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit , OnDestroy {
search:string = '' ; 
  users:User[] = [] ; 
  filteredUsers: User[] = [];  
  DestroyUser !: Subscription ; 
  constructor(private _UserServiceService:UserServiceService){}
  ngOnInit(): void {
    this.DestroyUser =   this._UserServiceService.getUsers().subscribe({
        next:(res)=>{
          // console.log(res);
          this.users = res ; 
          this.filteredUsers = this.users
          console.log("users => " , this.users);
          
        } , 
        error :(err)=>{
          console.log(err);
          alert(err.message)
          
        }
      })
  }


  onSearch(): void {
    if (this.search.trim() === '') {
      this.filteredUsers = [...this.users]; 
    } else {
      
      this.filteredUsers = this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.search.toLowerCase()) ||
          user.email.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
  ngOnDestroy(): void {
      this.DestroyUser.unsubscribe()
  }

}
