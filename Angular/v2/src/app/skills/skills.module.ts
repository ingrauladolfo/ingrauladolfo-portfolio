import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsHomeComponent } from './pages/skills-home/skills-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SkillsHomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [SkillsHomeComponent]
})
export class SkillsModule { }
