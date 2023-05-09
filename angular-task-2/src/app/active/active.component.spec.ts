import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveComponent } from './active.component';
import { UsersService } from '../users.service';

describe('ActiveComponent', () => {
  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
fdescribe('ActiveComponent', () => {
 let component: ActiveComponent;
//  let fixture: ComponentFixture<ActiveComponent>;
//   let usersService: UsersService;
//  let getUsersSpy: jasmine.Spy;
// it('should unsubscribe from subscription on destroy', () => {
//   spyOn(component.usersListSubscription, 'unsubscribe');
//   component.ngOnDestroy();
//  expect(component.usersListSubscription.unsubscribe).toHaveBeenCalled();
//  });
 })
