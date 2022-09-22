import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { MatButtonModule } from '@angular/material/button';
import{MatCardModule}from "@angular/material/card";
import{MatToolbarModule}from'@angular/material/toolbar';
import { ContentService } from './shared/services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
