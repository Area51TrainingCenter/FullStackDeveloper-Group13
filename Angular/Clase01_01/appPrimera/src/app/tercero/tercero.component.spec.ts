import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroComponent } from './tercero.component';

describe('TerceroComponent', () => {
  let component: TerceroComponent;
  let fixture: ComponentFixture<TerceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
