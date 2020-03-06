import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMenuEventComponent } from './find-menu-event.component';

describe('FindEventComponent', () => {
  let component: FindMenuEventComponent;
  let fixture: ComponentFixture<FindMenuEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMenuEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMenuEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
