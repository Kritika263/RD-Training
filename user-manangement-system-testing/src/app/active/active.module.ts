import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveRoutingModule } from './active-routing.module';
import { DeletedModule } from '../deleted/deleted.module';
import { ActiveComponent } from './active.component';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [ActiveComponent],
  imports: [
    CommonModule,
    ActiveRoutingModule,
    UsersModule
  ],
  exports:[ActiveComponent]
})
export class ActiveModule { 
  
}
