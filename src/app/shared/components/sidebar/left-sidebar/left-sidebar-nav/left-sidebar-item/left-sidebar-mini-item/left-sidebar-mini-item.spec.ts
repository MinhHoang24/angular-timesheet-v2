import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarMiniItem } from './left-sidebar-mini-item';

describe('LeftSidebarMiniItem', () => {
  let component: LeftSidebarMiniItem;
  let fixture: ComponentFixture<LeftSidebarMiniItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarMiniItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidebarMiniItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
