import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { SolutionComponent } from './pages/solution/solution.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesclientComponent } from './pages/servicesclient/servicesclient.component';




const routes: Routes = [
   {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'solution',component:SolutionComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'team',component:TeamComponent},
  {path:'services',component:ServicesclientComponent},
  

 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
