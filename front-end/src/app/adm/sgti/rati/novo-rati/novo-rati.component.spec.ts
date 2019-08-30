import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRatiComponent } from './novo-rati.component';

describe('NovoRatiComponent', () => {
  let component: NovoRatiComponent;
  let fixture: ComponentFixture<NovoRatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
