import { Component, OnInit, Input } from '@angular/core';

import { Annouce } from '../model/annouce.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() annouce: Annouce;

  constructor() { }

  ngOnInit() {
  }

}
