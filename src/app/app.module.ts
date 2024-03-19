
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    NgModule,
  
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

