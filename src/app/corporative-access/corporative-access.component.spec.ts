import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporativeAccessComponent } from './corporative-access.component';

describe('CorporativeAccessComponent', () => {
  let component: CorporativeAccessComponent;
  let fixture: ComponentFixture<CorporativeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporativeAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporativeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
