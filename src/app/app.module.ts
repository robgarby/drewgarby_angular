import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchHeightDirective } from './match-height.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchHeightDirective,
    AdminComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
