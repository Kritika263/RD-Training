import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletedRoutingModule } from './deleted-routing.module';
import { DeletedComponent } from './deleted.component';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [DeletedComponent],
  imports: [
    CommonModule,
    DeletedRoutingModule,
    UsersModule
  ],
  exports:[
    DeletedComponent
  ]
})
export class DeletedModule { }
