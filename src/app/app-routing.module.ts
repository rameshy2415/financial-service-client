import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IncometaxComponent } from './incometax/incometax.component';

const routes: Routes = [
  { path: '', redirectTo: 'incometax', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'incometax', component: IncometaxComponent },
/*   { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'postAdd', canActivate: [AuthGuard], component: AddComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'manageAd', component: ManageAdComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PagenotfoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
