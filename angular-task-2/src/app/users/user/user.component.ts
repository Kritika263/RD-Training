import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute,  RouteConfigLoadEnd, Router } from '@angular/router';
import { User } from 'src/app/users.interface';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('data') user! : User;
  @Input() feature : string = "";

  constructor(private usersService : UsersService, private router : Router, private route: ActivatedRoute){

  }

  buttonText: string = '';
  buttonClass: string = '';
  ngOnInit(){
  if (this.feature == 'manage') {
      this.buttonText = 'Details';
      this.buttonClass = 'btn-primary';
    }
    if (this.feature == 'active') {
      this.buttonText = 'Active';
      this.buttonClass = 'btn-success';
    }
    if (this.feature == 'deleted') {
      this.buttonText = 'Deactivate';
      this.buttonClass = 'btn-danger';
    }
  }
  handleUserButtonClick(data:User){
    console.log(this.feature)
     if(this.feature=='manage'){
      //use nested routing instead of this
      this.router.navigate(['details', data.id],{relativeTo:this.route});
     }else{

        data.isDeleted = !data.isDeleted;
        this.usersService.emitUsersListUpdatedEvent();

     }
  }
  
  buttonName(){
     if(this.feature=='manage'){
          return 'Details';
     }
     else if(this.feature=='active'){
      return 'Deactivate';
     }
     else{
      return 'Activate';
     }

  }



}
