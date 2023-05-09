import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { Component,Input } from '@angular/core';
import { User } from 'src/app/users.interface';
import { activeUsers } from 'src/assets/usersMock/activeUsers.test';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {

    @Component({
        selector : '<app-user></app-user>',
        template: '<div></div>'
    })
    class FakeUserComponent{
          @Input() data : string = ''
          @Input() feature: string = ''

    }
 
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent,FakeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.feature = 'active';
    component.users = activeUsers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number of user components made', ()=>{
      const divs  = fixture.debugElement.queryAll(By.css('div'));
      expect(divs.length).toBe(6)
  })

});
