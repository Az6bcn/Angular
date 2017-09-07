import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTwitterLikeComponent } from './bootstrap-twitter-like.component';

describe('BootstrapTwitterLikeComponent', () => {
  let component: BootstrapTwitterLikeComponent;
  let fixture: ComponentFixture<BootstrapTwitterLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTwitterLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTwitterLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
