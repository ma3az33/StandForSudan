import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StandForSudanService} from './stand.for.sudan.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [StandForSudanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
