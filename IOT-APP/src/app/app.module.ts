import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexBannerComponent } from './index-banner/index-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    IndexBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [IndexBannerComponent]
})
export class AppModule { }
