import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-coffee-layout',
  templateUrl: './buy-coffee-layout.component.html',
  styleUrls: ['./buy-coffee-layout.component.scss']
})
export class BuyCoffeeLayoutComponent implements OnInit {

  navigates = [
    {
      icon: 'home',
      title: 'overview',
      router: '/',
    },
    {
      icon: 'assignment',
      title: 'post',
      router: '/post',
    },
    {
      icon: 'settings',
      title: 'settings',
      router: '/settings',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

