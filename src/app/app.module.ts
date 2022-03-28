import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyChipComponent, MyChipsComponent} from './my-chips/my-chips.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChipsComponent,
    MyChipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
