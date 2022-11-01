import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellWrapperComponent } from './shell-wrapper.component';

describe('ShellWrapperComponent', () => {
  let component: ShellWrapperComponent;
  let fixture: ComponentFixture<ShellWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
