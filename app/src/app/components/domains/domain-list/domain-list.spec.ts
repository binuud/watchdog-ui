import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainList } from './domain-list';

describe('DomainList', () => {
  let component: DomainList;
  let fixture: ComponentFixture<DomainList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
