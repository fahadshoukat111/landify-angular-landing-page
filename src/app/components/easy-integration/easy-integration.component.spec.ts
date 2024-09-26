import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyIntegrationComponent } from './easy-integration.component';

describe('EasyIntegrationComponent', () => {
  let component: EasyIntegrationComponent;
  let fixture: ComponentFixture<EasyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
