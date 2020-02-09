import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';

import { NavigationComponent } from './navigation/navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BuyCoffeeLayoutComponent } from './buy-coffee-layout/buy-coffee-layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    NavigationComponent,
    SideNavigationComponent,
    BuyCoffeeLayoutComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,

  ]
})
export class LayoutModule { }
