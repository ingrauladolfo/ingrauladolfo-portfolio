import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ROBEMEXProjectsComponent } from './robemex-projects.component';

describe('ROBEMEXProjectsComponent', () => {
  let component: ROBEMEXProjectsComponent;
  let fixture: ComponentFixture<ROBEMEXProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ROBEMEXProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ROBEMEXProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
