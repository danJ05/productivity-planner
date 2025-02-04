import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFeaturesCardListDumbComponent } from './homepage-features-card-list.dumb.component';

describe('HomepageFeaturesCardListDumbComponent', () => {
  let component: HomepageFeaturesCardListDumbComponent;
  let fixture: ComponentFixture<HomepageFeaturesCardListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageFeaturesCardListDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFeaturesCardListDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
