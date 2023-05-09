import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component,Input} from '@angular/core';
import { ActiveComponent } from './active.component';
import { UsersService } from '../users.service';
import { User } from '../users.interface';


describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;
  let userService: UsersService;

  beforeEach(async () => {

     class UsersServiceStub extends UsersService{
       
        override users:User[] = [{
            id: "y5LpRv8x",
            firstName: "David",
            lastName: "Garcia",
            age: 32,
            login: "david.garcia",
            password: "P@$$w0rd123",
            isDeleted: false
          },
          {
            id: "a7TgKm9s",
            firstName: "Sarah",
            lastName: "Lee",
            age: 25,
            login: "sarah.lee",
            password: "Qwerty123$",
            isDeleted: true
          },
          {
            id: "p6FhTj2d",
            firstName: "John",
            lastName: "Smith",
            age: 41,
            login: "john.smith",
            password: "7^uQx8jK#5F",
            isDeleted: false
          }]
        
        

     }

     @Component({
        selector:'app-user-list' ,
        template: '<div></div>'
     })
     class FakeUserList{
      @Input() users = ''
      @Input() feature = ''
     }
     
    await TestBed.configureTestingModule({
      declarations: [ ActiveComponent,FakeUserList],
      providers:[
        {provide:UsersService, useClass:UsersServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('users property should have users with isDeleted property as false',()=>{
    
     expect(component.users[0].isDeleted).toBeFalse();
  });



});
