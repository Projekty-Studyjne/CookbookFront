import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRecipeComponent } from './category-recipe.component';

describe('CategoryRecipeComponent', () => {
  let component: CategoryRecipeComponent;
  let fixture: ComponentFixture<CategoryRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryRecipeComponent]
    });
    fixture = TestBed.createComponent(CategoryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
