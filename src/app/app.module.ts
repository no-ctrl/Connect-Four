import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { WonDialogComponent } from './won-dialog/won-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartMenuComponent } from './start-menu/start-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnectFourComponent,
    WonDialogComponent,
    StartMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
