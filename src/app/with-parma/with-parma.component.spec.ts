import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithParmaComponent } from './with-parma.component';

describe('WithParmaComponent', () => {
  let component: WithParmaComponent;
  let fixture: ComponentFixture<WithParmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithParmaComponent]
    });
    fixture = TestBed.createComponent(WithParmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
