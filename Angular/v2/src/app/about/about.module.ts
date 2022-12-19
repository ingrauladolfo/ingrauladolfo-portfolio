import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './pages/about-home/about-home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CvComponent } from './pages/cv/cv.component';



@NgModule({
  declarations: [AboutHomeComponent, AboutMeComponent, CvComponent],
  imports: [
    CommonModule
  ],exports: [AboutHomeComponent]
})
export class AboutModule { }
