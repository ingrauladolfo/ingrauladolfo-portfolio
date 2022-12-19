import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatichProjectsComponent } from './tatich-projects.component';

describe('TatichProjectsComponent', () => {
  let component: TatichProjectsComponent;
  let fixture: ComponentFixture<TatichProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatichProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatichProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
