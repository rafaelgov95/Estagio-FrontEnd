import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmAndamentoComponent } from './em-andamento.component';

describe('EmAndamentoComponent', () => {
  let component: EmAndamentoComponent;
  let fixture: ComponentFixture<EmAndamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmAndamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
