import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluidasComponent } from './concluidas.component';

describe('ConcluidasComponent', () => {
  let component: ConcluidasComponent;
  let fixture: ComponentFixture<ConcluidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
