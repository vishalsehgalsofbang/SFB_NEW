import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule,CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
