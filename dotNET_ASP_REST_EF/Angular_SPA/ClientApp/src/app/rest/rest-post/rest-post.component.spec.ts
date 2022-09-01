import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPostComponent } from './rest-post.component';

describe('RestPostComponent', () => {
  let component: RestPostComponent;
  let fixture: ComponentFixture<RestPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
