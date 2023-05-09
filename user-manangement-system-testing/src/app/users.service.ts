import { EventEmitter, Injectable } from '@angular/core';
import { User } from './users.interface';
import { users } from 'src/database/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router) {

  }

  users : User[]  = users;
  
  

  usersListUpdatedEvent = new EventEmitter<undefined>();

  emitUsersListUpdatedEvent(){
      this.usersListUpdatedEvent.emit();
   }

  getSpecifiedUsers(isDeleted:boolean|string){
       if(typeof isDeleted === 'string'){
        return this.users;
       }
       return this.users.filter(user=>user.isDeleted==isDeleted)
  }
 
  

  getUserById(id:string|null){
        
      return this.users.find((user)=>user.id==id);
   }

   navigateToDetails(id:string){
        
    this.router.navigate(['manage', id]);
   }


   toggleIsDeleted(data: User){

    data.isDeleted = !data.isDeleted;
    this.emitUsersListUpdatedEvent();

   }
   


}
