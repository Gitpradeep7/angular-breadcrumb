import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwellaryComponent } from './jwellary.component';

describe('JwellaryComponent', () => {
  let component: JwellaryComponent;
  let fixture: ComponentFixture<JwellaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JwellaryComponent]
    });
    fixture = TestBed.createComponent(JwellaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
