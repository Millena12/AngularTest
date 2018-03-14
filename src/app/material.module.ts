import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

import {
  MatSidenavModule
} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    CdkAccordionModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    CdkAccordionModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {}
