import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInfoRatiComponent } from './banner-info-rati.component';

describe('BannerInfoRatiComponent', () => {
  let component: BannerInfoRatiComponent;
  let fixture: ComponentFixture<BannerInfoRatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInfoRatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInfoRatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
