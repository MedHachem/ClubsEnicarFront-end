import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilterComponent } from './listfilter.component';

describe('ListfilterComponent', () => {
  let component: ListfilterComponent;
  let fixture: ComponentFixture<ListfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
