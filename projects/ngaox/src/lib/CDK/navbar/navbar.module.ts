import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const EXPORTS = [
  SidebarComponent
]

@NgModule({
  declarations: [...EXPORTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...EXPORTS,
    RouterModule
  ]
})
export class NavbarModule { }
