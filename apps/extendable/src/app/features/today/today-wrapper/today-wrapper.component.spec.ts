import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWrapperComponent } from './today-wrapper.component';

describe('TodayWrapperComponent', () => {
  let component: TodayWrapperComponent;
  let fixture: ComponentFixture<TodayWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodayWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
