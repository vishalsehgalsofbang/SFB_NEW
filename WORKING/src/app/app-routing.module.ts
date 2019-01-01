import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Main_Layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HrmsComponent } from './hrms/hrms.component';

const appRoutes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'layout', component: LayoutComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'login' , component: LoginComponent, },
  { path:'footer' , component: FooterComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'hrms', component: HrmsComponent }
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    
  ]
})
export class AppRoutingModule { }
