import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBasedDialogComponent } from './tab-based-dialog.component';

describe('TabBasedDialogComponent', () => {
  let component: TabBasedDialogComponent;
  let fixture: ComponentFixture<TabBasedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBasedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBasedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
