import { Component, Input, OnInit } from '@angular/core';
import { route } from '../../../interfaces/ngaox';

@Component({
  selector: 'ngaox-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input("routes") routesList:route[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
