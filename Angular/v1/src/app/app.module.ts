import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Free
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './components/companies/companies.component';
import {MatCardModule} from '@angular/material/card';
import { RobemexProjectsComponent } from './components/companies/robemex/robemex-projects.component';
import { TatichProjectsComponent } from './components/companies/tatich/tatich-projects.component';
import { RnetProjectsComponent } from './components/companies/rnet/rnet-projects.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/about/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CompaniesComponent,
    RobemexProjectsComponent,
    TatichProjectsComponent,
    RnetProjectsComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    WavesModule, ButtonsModule, IconsModule,
    MDBBootstrapModule.forRoot(),
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
