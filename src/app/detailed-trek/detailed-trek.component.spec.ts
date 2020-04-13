import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTrekComponent } from './detailed-trek.component';

describe('DetailedTrekComponent', () => {
  let component: DetailedTrekComponent;
  let fixture: ComponentFixture<DetailedTrekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTrekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
