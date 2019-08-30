import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaDeFrequenciaComponent } from './folha-de-frequencia.component';

describe('FolhaDeFrequenciaComponent', () => {
  let component: FolhaDeFrequenciaComponent;
  let fixture: ComponentFixture<FolhaDeFrequenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolhaDeFrequenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhaDeFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
