import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexBannerComponent } from './index-banner/index-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import { CradChapComponent } from './crad-chap/crad-chap.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    IndexBannerComponent,
    CardComponent,
    FooterComponent,
    CradChapComponent,
    ListeComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [IndexBannerComponent]
})
export class AppModule { }
