import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEventsPageComponent } from './special-events-page.component';

describe('SpecialEventsPageComponent', () => {
  let component: SpecialEventsPageComponent;
  let fixture: ComponentFixture<SpecialEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialEventsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
