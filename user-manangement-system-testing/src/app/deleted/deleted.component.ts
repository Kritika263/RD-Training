import {Component,OnInit, OnDestroy} from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.interface';

@Component({
    selector: 'deleted',
    templateUrl: './deleted.component.html',
    styleUrls: ['./deleted.component.scss']

})
export class DeletedComponent implements OnInit{
     
    constructor(private userService : UsersService){

    }
     
   users : User[]=[];
   usersListSubscription:any;
    ngOnInit(){
     this.users = this.userService.getSpecifiedUsers(true)
     this.usersListSubscription =  this.userService.usersListUpdatedEvent.subscribe(()=>{
        console.log("inside deleted subscribe callback")
           this.users = this.userService.getSpecifiedUsers(true)
       });
    }
 
    ngOnDestroy(): void {
         this.usersListSubscription.unsubscribe();
    }


}