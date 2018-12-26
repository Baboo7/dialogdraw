import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    NgxChartsModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
