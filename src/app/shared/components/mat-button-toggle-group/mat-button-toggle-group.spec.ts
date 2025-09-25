import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggleGroup } from './mat-button-toggle-group';

describe('MatButtonToggleGroup', () => {
  let component: MatButtonToggleGroup;
  let fixture: ComponentFixture<MatButtonToggleGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonToggleGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatButtonToggleGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
