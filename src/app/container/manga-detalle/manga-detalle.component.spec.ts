import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaDetalleComponent } from './manga-detalle.component';

describe('MangaDetalleComponent', () => {
  let component: MangaDetalleComponent;
  let fixture: ComponentFixture<MangaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
