import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Way1ParentComponent } from './components/way1-parent/way1-parent.component';
import { Way1ChildComponent } from './components/way1-child/way1-child.component';
import { Way2ParentComponent } from './components/way2-parent/way2-parent.component';
import { Way2ChildComponent } from './components/way2-child/way2-child.component';
import { Way3SenderComponent } from './components/way3-sender/way3-sender.component';
import { Way3ReceiverComponent } from './components/way3-receiver/way3-receiver.component';
import { Way3Component } from './components/way3/way3.component';

@NgModule({
  declarations: [
    AppComponent,
    Way1ParentComponent,
    Way1ChildComponent,
    Way2ParentComponent,
    Way2ChildComponent,
    Way3SenderComponent,
    Way3ReceiverComponent,
    Way3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
