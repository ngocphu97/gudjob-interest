import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { OverviewComponent } from './containers/overview/overview.component';
import { InformationComponent } from './containers/information/information.component';
import { FooterComponent } from './containers/footer/footer.component';
import { AnalyticsComponent } from './containers/analytics/analytics.component';
import { PageModule } from '@app/shared/page';

@NgModule({
  declarations: [
    OverviewComponent,
    InformationComponent,
    FooterComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatSelectModule,

    PageModule
  ]
})
export class OverviewModule { }
