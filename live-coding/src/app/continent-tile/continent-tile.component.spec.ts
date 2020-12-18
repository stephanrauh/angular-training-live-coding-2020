import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentTileComponent } from './continent-tile.component';

describe('ContinentTileComponent', () => {
  let component: ContinentTileComponent;
  let fixture: ComponentFixture<ContinentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
