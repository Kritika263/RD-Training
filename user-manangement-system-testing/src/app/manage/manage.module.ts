import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    UsersModule
  ],
  exports:[
    ManageComponent
  ]
})
export class ManageModule{



 }
