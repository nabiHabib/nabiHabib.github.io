import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-vieewer',
  templateUrl: './pdf-vieewer.component.html',
  styleUrls: ['./pdf-vieewer.component.css']
})
export class PdfVieewerComponent {
  pdfSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit(): void {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/SoftwareEngineerResumeWeb.pdf');
  }
  

}