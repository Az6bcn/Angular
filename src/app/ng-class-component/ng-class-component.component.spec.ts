import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassComponentComponent } from './ng-class-component.component';

describe('NgClassComponentComponent', () => {
  let component: NgClassComponentComponent;
  let fixture: ComponentFixture<NgClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
