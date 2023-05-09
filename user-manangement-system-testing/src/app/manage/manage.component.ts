import { Component,OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.interface';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  constructor(private userService : UsersService){

  }
   
 users : User[] =[];
 
  ngOnInit(){
   this.users = this.userService.getSpecifiedUsers('all');
  }
}
