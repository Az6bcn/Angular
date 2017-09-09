import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfComponentComponent } from './ng-if-component.component';

describe('NgIfComponentComponent', () => {
  let component: NgIfComponentComponent;
  let fixture: ComponentFixture<NgIfComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
