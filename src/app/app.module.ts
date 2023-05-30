import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { EpicComponent } from './epic/epic.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    AsteroidsComponent,
    NavigationComponent,
    EarthComponent,
    MarsComponent,
    EpicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
