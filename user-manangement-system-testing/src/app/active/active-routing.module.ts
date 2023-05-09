import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedComponent } from '../deleted/deleted.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveRoutingModule { }
