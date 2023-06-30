import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriventableComponent } from './template-driventable.component';

describe('TemplateDriventableComponent', () => {
  let component: TemplateDriventableComponent;
  let fixture: ComponentFixture<TemplateDriventableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDriventableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDriventableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
