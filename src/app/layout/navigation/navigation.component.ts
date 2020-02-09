import { Component, OnInit, HostBinding } from '@angular/core';

import { Annouce } from '../model/annouce.model';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  annoucments: Array<Annouce> = [
    {
      status: 'new',
      title: 'The standard Lorem Ipsum passage, used since the 1500s',
      content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      `
    },
    {
      status: 'improve',
      title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      `
    },
    {
      status: 'new',
      title: 'LowerCasePipe',
      content: 'LowerCasePipe lowercase lowercase'
    },
  ];

  ngOnInit() {
  }

  lightTheme() {
    document.getElementsByTagName('body')[0].classList.remove('unicorn-dark-theme');
    document.getElementsByTagName('body')[0].classList.add('unicorn-light-theme');
  }

  darkTheme() {
    document.getElementsByTagName('body')[0].classList.remove('unicorn-light-theme');
    document.getElementsByTagName('body')[0].classList.add('unicorn-dark-theme');
  }
}
