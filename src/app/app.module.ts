import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightswitchgitComponent } from './lightswitchgit/lightswitchgit.component';

@NgModule({
  declarations: [
    AppComponent,
    LightswitchgitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
