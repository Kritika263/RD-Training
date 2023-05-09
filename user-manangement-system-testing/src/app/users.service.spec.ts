import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { allUsers } from 'src/assets/usersMock/allUsers.test';
import { FactoryTarget } from '@angular/compiler';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [
        UsersService,
        {provide: 'users', useValue: allUsers }
      ]
    });
    service = TestBed.inject(UsersService);
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSpecifiedUsers function should return the list of users according to the parameter',()=>{
      
   
    expect(service.getSpecifiedUsers('all').length).toBe(11);

    expect(service.getSpecifiedUsers(true)[0].isDeleted).toBeTruthy();

    expect(service.getSpecifiedUsers(false)[0].isDeleted).toBeFalsy();

  })


  it('getUserById function should return user with specific id',()=>{

    //assert
    expect(service.getUserById("y5LpRv8x")).toEqual(service.users[0]);
  })


  it('toggleIsDeleted should toggle the isDeleted property of the user and emit the event inside',()=>{
   
     spyOn(service,'emitUsersListUpdatedEvent').and.returnValue();

     service.users[0].isDeleted = true;
     service.toggleIsDeleted(service.users[0]);
    expect(service.users[0].isDeleted).toBe(false);
    expect(service.emitUsersListUpdatedEvent).toHaveBeenCalled();
  })
 
  
});
