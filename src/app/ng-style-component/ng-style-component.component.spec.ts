import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleComponentComponent } from './ng-style-component.component';

describe('NgStyleComponentComponent', () => {
  let component: NgStyleComponentComponent;
  let fixture: ComponentFixture<NgStyleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
