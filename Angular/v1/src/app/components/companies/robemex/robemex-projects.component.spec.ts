import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobemexProjectsComponent } from './robemex-projects.component';

describe('RobemexProjectsComponent', () => {
  let component: RobemexProjectsComponent;
  let fixture: ComponentFixture<RobemexProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobemexProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobemexProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
