import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagioComponent } from './estagio.component';

describe('EstagioComponent', () => {
  let component: EstagioComponent;
  let fixture: ComponentFixture<EstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
