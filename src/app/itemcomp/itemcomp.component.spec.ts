import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcompComponent } from './itemcomp.component';

describe('ItemcompComponent', () => {
  let component: ItemcompComponent;
  let fixture: ComponentFixture<ItemcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
