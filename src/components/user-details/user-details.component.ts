import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserServiceService } from '../../core/services/user-service.service';
import { Subscription } from 'rxjs';
import { UserDetails } from '../../core/interfaces/user-details';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent  implements OnInit , OnDestroy{
  userId !: number ;
  userDetails !: UserDetails  ;
  destroyId !: Subscription ;
  destroyUserDetails !: Subscription ;   
  constructor(private _ActivatedRoute:ActivatedRoute , private _UserServiceService:UserServiceService){

  }
  ngOnInit(): void {
     this.destroyId =  this._ActivatedRoute.paramMap.subscribe({
        next:(res)=>{
          this.userId = Number(res.get('id')) 
          console.log(this.userId);
          
        }
      }) ; 
    this.destroyUserDetails =   this._UserServiceService.getUserById(this.userId).subscribe({
        next : (res)=>{
          console.log('user' , res);
          this.userDetails = res ; 
          
        } , error:(err)=>{
          console.log('err' , err);
          
        }
      })
      
  }

  ngOnDestroy(): void {
      this.destroyId.unsubscribe() ; 
      this.destroyUserDetails.unsubscribe();
  }
}
