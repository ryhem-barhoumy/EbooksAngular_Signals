import { Component, inject } from '@angular/core';
import { EbookService } from '../ebook-service';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css'
})
export class EbooksList {
  ebookSrvc = inject(EbookService);
  ebooks = this.ebookSrvc['ebooks'];

  deleteEbook(id: number) {
    this.ebookSrvc.deleteEbook(id);
  }
}
