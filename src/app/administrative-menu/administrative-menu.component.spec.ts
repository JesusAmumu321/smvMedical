import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeMenuComponent } from './administrative-menu.component';

describe('AdministrativeMenuComponent', () => {
  let component: AdministrativeMenuComponent;
  let fixture: ComponentFixture<AdministrativeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
