import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfromComponent } from './editfrom.component';

describe('EditfromComponent', () => {
  let component: EditfromComponent;
  let fixture: ComponentFixture<EditfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfromComponent]
    });
    fixture = TestBed.createComponent(EditfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
