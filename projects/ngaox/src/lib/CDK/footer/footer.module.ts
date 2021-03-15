import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMinComponent } from './footer-min/footer-min.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContentComponent } from './footer-content/footer-content.component';

const EXPORTS = [
  FooterComponent,
  FooterMinComponent,
  FooterContentComponent
]

@NgModule({
  declarations: [...EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTS
  ]
})
export class FooterModule { }
