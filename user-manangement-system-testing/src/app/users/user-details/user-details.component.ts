import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users.interface';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute){
         
    }

    user : User|undefined ;
    userStatus !:string;

   
    ngOnInit(){
       this.activatedRoute.paramMap.subscribe(params=>{
          const id =  params.get('id');
          this.user = this.usersService.getUserById(id);
          this.userStatus = this.user?.isDeleted?'Deleted':'Active'
        })
            
    }
}
