import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeFeaturesComponent } from './made-features.component';

describe('MadeFeaturesComponent', () => {
  let component: MadeFeaturesComponent;
  let fixture: ComponentFixture<MadeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadeFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
