import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './Services/login.service';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarFixComponent } from './nav-bar-fix/nav-bar-fix.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeaderComponent,
    FooterComponent,
   NavBarFixComponent
  ],
  providers: [LoginService],
  bootstrap: [ AppComponent ,AppRoutingModule]
})
export class AppModule { }