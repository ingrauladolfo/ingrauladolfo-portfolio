import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnetProjectsComponent } from './rnet-projects.component';

describe('RnetProjectsComponent', () => {
  let component: RnetProjectsComponent;
  let fixture: ComponentFixture<RnetProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnetProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnetProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
