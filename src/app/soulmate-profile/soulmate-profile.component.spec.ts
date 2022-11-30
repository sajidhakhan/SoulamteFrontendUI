import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulmateProfileComponent } from './soulmate-profile.component';

describe('SoulmateProfileComponent', () => {
  let component: SoulmateProfileComponent;
  let fixture: ComponentFixture<SoulmateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoulmateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoulmateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
