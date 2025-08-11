import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainDetailsPage } from './domain-details-page';

describe('DomainDetailsPage', () => {
  let component: DomainDetailsPage;
  let fixture: ComponentFixture<DomainDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
