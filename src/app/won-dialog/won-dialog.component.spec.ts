import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonDialogComponent } from './won-dialog.component';

describe('WonDialogComponent', () => {
  let component: WonDialogComponent;
  let fixture: ComponentFixture<WonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
