import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusRatiComponent } from './meus-rati.component';

describe('MeusRatiComponent', () => {
  let component: MeusRatiComponent;
  let fixture: ComponentFixture<MeusRatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusRatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusRatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
