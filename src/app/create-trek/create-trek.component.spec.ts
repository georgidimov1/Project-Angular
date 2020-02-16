import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrekComponent } from './create-trek.component';

describe('CreateTrekComponent', () => {
  let component: CreateTrekComponent;
  let fixture: ComponentFixture<CreateTrekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
