import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreCloseComponent } from './we-are-close.component';

describe('WeAreCloseComponent', () => {
  let component: WeAreCloseComponent;
  let fixture: ComponentFixture<WeAreCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAreCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
