import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component,Input} from '@angular/core'
import { ManageComponent } from './manage.component';
import { User } from '../users.interface';
import { allUsers } from 'src/assets/usersMock/allUsers.test';
import { RouterModule } from '@angular/router';
import { UsersService } from '../users.service';
import { By } from '@angular/platform-browser';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  let userService: UsersService;
  @Component({
    selector: 'app-user-list',
    template: '<div></div>',
  })
  class FakeUserListComponent { 
    @Input() users : User[] = allUsers;
    @Input() feature : string  = "";
  }
  beforeEach(async () => {

    class UsersServiceStub extends UsersService{
       
      override users:User[] = allUsers;
      

   }

    await TestBed.configureTestingModule({
      declarations: [ ManageComponent, FakeUserListComponent ],
      providers : [ {provide:UsersService, useClass:UsersServiceStub}],
      imports: [RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('recieved data from service', ()=>{

     expect(component.users).toBe(allUsers);
  })

  it('div with class row rendered',()=>{
      
    const div = fixture.debugElement.query(By.css('.row'));
    expect(div.name).toBe('div');

  })

});
