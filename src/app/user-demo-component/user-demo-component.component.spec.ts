import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemoComponentComponent } from './user-demo-component.component';

describe('UserDemoComponentComponent', () => {
  let component: UserDemoComponentComponent;
  let fixture: ComponentFixture<UserDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
