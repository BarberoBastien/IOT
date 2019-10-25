import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CradChapComponent } from './crad-chap.component';

describe('CradChapComponent', () => {
  let component: CradChapComponent;
  let fixture: ComponentFixture<CradChapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CradChapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CradChapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
