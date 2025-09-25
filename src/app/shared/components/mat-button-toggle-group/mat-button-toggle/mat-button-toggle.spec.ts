import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggle } from './mat-button-toggle';

describe('MatButtonToggle', () => {
  let component: MatButtonToggle;
  let fixture: ComponentFixture<MatButtonToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatButtonToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
