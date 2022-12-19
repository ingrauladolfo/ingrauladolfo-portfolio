import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatichstudioProjectsComponent } from './tatichstudio-projects.component';

describe('TatichstudioProjectsComponent', () => {
  let component: TatichstudioProjectsComponent;
  let fixture: ComponentFixture<TatichstudioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TatichstudioProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TatichstudioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
