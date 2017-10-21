import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCenterComponent } from './project-center.component';

describe('ProjectCenterComponent', () => {
  let component: ProjectCenterComponent;
  let fixture: ComponentFixture<ProjectCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
