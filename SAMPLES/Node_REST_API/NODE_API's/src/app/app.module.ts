import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DemoServiceService } from './demo-service.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2GoogleChartsModule,
    HttpClientModule
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
