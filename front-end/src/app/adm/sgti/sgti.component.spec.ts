import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgtiComponent } from './sgti.component';

describe('SgtiComponent', () => {
  let component: SgtiComponent;
  let fixture: ComponentFixture<SgtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
