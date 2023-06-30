import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformtableComponent } from './reactiveformtable.component';

describe('ReactiveformtableComponent', () => {
  let component: ReactiveformtableComponent;
  let fixture: ComponentFixture<ReactiveformtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
