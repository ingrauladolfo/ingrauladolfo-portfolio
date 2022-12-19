import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeHomeComponent } from './contact-me-home.component';

describe('ContactMeHomeComponent', () => {
  let component: ContactMeHomeComponent;
  let fixture: ComponentFixture<ContactMeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
