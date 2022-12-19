import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './pages/company-home/company-home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'primeng/carousel';
import { ROBEMEXProjectsComponent } from './pages/robemex-projects/robemex-projects.component';
import { RnetProjectsComponent } from './pages/rnet-projects/rnet-projects.component';
import { TatichstudioProjectsComponent } from './pages/tatichstudio-projects/tatichstudio-projects.component';



@NgModule({
  declarations: [CompanyHomeComponent, ROBEMEXProjectsComponent, RnetProjectsComponent, TatichstudioProjectsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    CarouselModule
  ],exports: [CompanyHomeComponent, ROBEMEXProjectsComponent]
})
export class CompanyModule { }
