import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesturesIntroComponent } from './gestures-intro.component';

describe('GesturesIntroComponent', () => {
  let component: GesturesIntroComponent;
  let fixture: ComponentFixture<GesturesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesturesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesturesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
