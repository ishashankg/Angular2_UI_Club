import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }       from './app.component';
import { routing,appRoutingProviders } from './app.routing';
import { Component1 }    from './component1';
import { Component2 }  from './component2';
@NgModule({
  imports: [ BrowserModule, FormsModule, routing],
  declarations: [AppComponent,Component1,Component2],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
