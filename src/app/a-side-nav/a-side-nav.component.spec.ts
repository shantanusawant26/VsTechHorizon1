import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASideNavComponent } from './a-side-nav.component';

describe('ASideNavComponent', () => {
  let component: ASideNavComponent;
  let fixture: ComponentFixture<ASideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ASideNavComponent]
    });
    fixture = TestBed.createComponent(ASideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
