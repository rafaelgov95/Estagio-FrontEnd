import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDeEstagioComponent } from './local-de-estagio.component';

describe('LocalDeEstagioComponent', () => {
  let component: LocalDeEstagioComponent;
  let fixture: ComponentFixture<LocalDeEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDeEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDeEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
