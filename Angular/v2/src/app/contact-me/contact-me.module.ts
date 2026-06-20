import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeHomeComponent } from './pages/contact-me-home/contact-me-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactMeHomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[ContactMeHomeComponent]
})
export class ContactMeModule { }
