import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { allUsers } from 'src/assets/usersMock/allUsers.test';
import { User } from 'src/app/users.interface';
import { UsersService } from 'src/app/users.service';


describe('UserComponent', () => {
  class mockUserService {
    Users: User[] = allUsers;
    toggleIsDeleted(id: string) {}
    navigateToDetails(id: string) {}
  }

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UsersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UsersService, useClass: mockUserService }],
    }).compileComponents();
    userService = TestBed.inject(UsersService);
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = allUsers[0];
    component.feature = 'manage';
    fixture.detectChanges();
  });

  it('should render user according to manage', () => {
    let spy = spyOn(userService, 'navigateToDetails');
    component.handleUserButtonClick();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.buttonText).toBe('Details');
    expect(component.buttonClass).toBe('btn-primary');
  });

  it('should render user according to active', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = allUsers[1];
    component.feature = 'active';
    fixture.detectChanges();
    expect(component.buttonText).toBe('Active');
    expect(component.buttonClass).toBe('btn-success');
  });

  it('should render user according to deleted', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = allUsers[0];
    component.feature = 'deleted';
    fixture.detectChanges();

    let spy = spyOn(userService, 'toggleIsDeleted');
    component.handleUserButtonClick();
    expect(component.buttonText).toBe('Deactivate');
    expect(component.buttonClass).toBe('btn-danger');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});