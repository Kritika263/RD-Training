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

  constructor(private usersService : UsersService){

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
  handleUserButtonClick(){
    console.log(this.feature)
     if(this.feature=='manage'){
      
     this.usersService.navigateToDetails(this.user.id);
     }else{

      this.usersService.toggleIsDeleted(this.user);

     }
  }
  
  



}
