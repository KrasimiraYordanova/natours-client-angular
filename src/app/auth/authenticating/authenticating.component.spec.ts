import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatingComponent } from './authenticating.component';

describe('AuthenticatingComponent', () => {
  let component: AuthenticatingComponent;
  let fixture: ComponentFixture<AuthenticatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticatingComponent]
    });
    fixture = TestBed.createComponent(AuthenticatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
