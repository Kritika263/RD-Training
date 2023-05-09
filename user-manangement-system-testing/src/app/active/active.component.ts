import {Component, OnInit,OnDestroy} from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.interface';

@Component({
   selector : 'active',
   templateUrl : './active.component.html',
   styleUrls : ['./active.component.scss'],

})

export class ActiveComponent implements OnInit{
  constructor(private userService : UsersService){

  }
   
 users : User[] =[];
 usersListSubscription:any;
  ngOnInit(){
    this.users = this.userService.getSpecifiedUsers(false)
   this.usersListSubscription = this.userService.usersListUpdatedEvent.subscribe(()=>{
       this.users = this.userService.getSpecifiedUsers(false); 
   });


  }
 
  ngOnDestroy(){
    this.usersListSubscription.unsubscribe();
  }

}