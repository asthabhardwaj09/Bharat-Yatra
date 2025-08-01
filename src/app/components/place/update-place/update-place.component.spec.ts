import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlaceComponent } from './update-place.component';

describe('UpdatePlaceComponent', () => {
  let component: UpdatePlaceComponent;
  let fixture: ComponentFixture<UpdatePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
