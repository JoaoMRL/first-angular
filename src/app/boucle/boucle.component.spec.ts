import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoucleComponent } from './boucle.component';

describe('BoucleComponent', () => {
  let component: BoucleComponent;
  let fixture: ComponentFixture<BoucleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoucleComponent]
    });
    fixture = TestBed.createComponent(BoucleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
