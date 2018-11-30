import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarFixComponent } from './nav-bar-fix/nav-bar-fix.component';
import { HomepageComponent } from './homepage/homepage.component'

const routes: Route[] = [
  { path:'header', component: HeaderComponent},
  { path:'hero-form', component: HeroFormComponent},
  { path:'footer', component: FooterComponent},
  { path:'homepage', component: HomepageComponent},
  { path:'nav-bar-fix', component: NavBarFixComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
