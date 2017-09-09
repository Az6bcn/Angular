import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponentComponent } from './ng-for-component.component';

describe('NgForComponentComponent', () => {
  let component: NgForComponentComponent;
  let fixture: ComponentFixture<NgForComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
