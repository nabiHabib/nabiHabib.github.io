import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfVieewerComponent } from './pdf-vieewer.component';

describe('PdfVieewerComponent', () => {
  let component: PdfVieewerComponent;
  let fixture: ComponentFixture<PdfVieewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfVieewerComponent]
    });
    fixture = TestBed.createComponent(PdfVieewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
