import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedDetailComponent } from './ranked-detail.component';

describe('RankedDetailComponent', () => {
  let component: RankedDetailComponent;
  let fixture: ComponentFixture<RankedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
