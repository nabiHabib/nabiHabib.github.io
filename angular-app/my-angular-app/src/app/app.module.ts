import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PdfVieewerComponent } from './pdf-vieewer/pdf-vieewer.component'; // Keep it as "PdfVieewerComponent"

@NgModule({
  declarations: [
    AppComponent,
    PdfVieewerComponent // Correct the component name here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }