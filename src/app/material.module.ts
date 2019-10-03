import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule
  } from '@angular/material';
  @NgModule({
    imports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatCardModule
    ],
    exports: [
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatToolbarModule,
      MatCardModule
    ]
  })
  export class AppMaterialModule { }