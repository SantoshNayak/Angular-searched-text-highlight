import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightPipe } from './pipe/highlight.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    HighlightPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
