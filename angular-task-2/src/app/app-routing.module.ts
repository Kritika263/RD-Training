import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { DeletedComponent } from './deleted/deleted.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [

  
{ path: '', component:HomeComponent},
{ path : 'active', component: ActiveComponent},
{ path : 'deleted',component: DeletedComponent},
{ path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
},
{ path : '**', component:PageNotFoundComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
