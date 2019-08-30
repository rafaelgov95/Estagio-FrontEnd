import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarRatiComponent } from './visualizar-rati.component';

describe('VisualizarRatiComponent', () => {
  let component: VisualizarRatiComponent;
  let fixture: ComponentFixture<VisualizarRatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarRatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarRatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
