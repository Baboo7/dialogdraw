import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDialogComponent,
  ],
  entryComponents: [
    InputDialogComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    NgxChartsModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
