import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFeaturesCardListDumbComponent } from './homepage-features-card-list.dumb.component';
import {FeatureCardList} from './homepage-feature-card-list.interface';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HomepageFeaturesCardListDumbComponent', () => {
  let component: HomepageFeaturesCardListDumbComponent;
  let fixture: ComponentFixture<HomepageFeaturesCardListDumbComponent>;
  let cardList: DebugElement[];
  let cardTitleList: DebugElement[];

  const featureCardList: FeatureCardList = [
    { name: 'Feature 1', description: 'Description 1', icon: 'star' },
    { name: 'Feature 2', description: 'Description 2', icon: 'heart' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageFeaturesCardListDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFeaturesCardListDumbComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('featuresCardList', featureCardList);

    fixture.detectChanges();
  });
  beforeEach(() => {
    cardList = fixture.debugElement.queryAll(
      By.css('[data-testid="feature-card"]')
    );
    cardTitleList = fixture.debugElement.queryAll(
      By.css('[data-testid="feature-card-title"]')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of feature cards', () => {
    expect(cardList.length).toBe(2);
  });

  it.todo('should display nothing if feature list is empty');

  it.todo('should display correct titles in each card');
});
