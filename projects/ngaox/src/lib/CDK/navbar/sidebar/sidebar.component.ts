import { Component, Input } from '@angular/core';
import { route } from '../../../interfaces/ngaox';

@Component({
  selector: 'ngaox-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['']
})
export class SidebarComponent {

  @Input() routes:route[] = [];

  constructor() { }
}
