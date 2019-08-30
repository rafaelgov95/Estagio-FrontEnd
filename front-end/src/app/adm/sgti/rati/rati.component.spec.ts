import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiComponent } from './rati.component';

describe('RatiComponent', () => {
  let component: RatiComponent;
  let fixture: ComponentFixture<RatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
