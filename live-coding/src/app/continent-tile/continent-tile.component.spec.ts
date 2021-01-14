import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SixItemsPipe } from '../pipes/six-items.pipe';

import { ContinentTileComponent } from './continent-tile.component';

fdescribe('ContinentTileComponent', () => {
  let component: ContinentTileComponent;
  let fixture: ComponentFixture<ContinentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContinentTileComponent, SixItemsPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a country', () => {
    fixture.componentInstance.continent = 'Europe';
    fixture.componentInstance.countries = ['France', 'Spain'];
    fixture.detectChanges();

    const result = fixture.debugElement;
    const france = result.query(By.css('.country-span'));
    const span = france.nativeElement as HTMLElement;
    expect(span.textContent).toBe('France , ');
  });
});
