import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexBannerComponent } from './index-banner/index-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    IndexBannerComponent,
    CardComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [IndexBannerComponent]
})
export class AppModule { }
