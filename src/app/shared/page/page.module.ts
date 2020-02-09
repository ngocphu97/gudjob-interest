import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageSubTitleComponent } from './page-sub-title/page-sub-title.component';
import { PageHeaderActionsComponent } from './page-header-actions/page-header-actions.component';

const PAGE_ELEMENTS = [
  PageComponent,
  PageHeaderComponent,
  PageTitleComponent,
  PageContentComponent,
  PageSubTitleComponent,
  PageHeaderActionsComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PAGE_ELEMENTS
  ],
  exports: [
    PAGE_ELEMENTS
  ]
})
export class PageModule { }
