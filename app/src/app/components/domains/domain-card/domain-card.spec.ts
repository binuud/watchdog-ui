import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainCard } from './domain-card';

describe('DomainCard', () => {
  let component: DomainCard;
  let fixture: ComponentFixture<DomainCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
