import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testmod2Component } from './testmod2.component';

describe('Testmod2Component', () => {
  let component: Testmod2Component;
  let fixture: ComponentFixture<Testmod2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testmod2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testmod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
