import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //required for ngModel two way binding
import { serverComponent } from './server/server.component';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //required for ngModel two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}
