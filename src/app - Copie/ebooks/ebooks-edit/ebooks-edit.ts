import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EbookService } from '../ebook-service';
import { Ebook } from '../ebook';

@Component({
  selector: 'app-ebooks-edit',
  standalone: false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css'
})
export class EbooksEdit implements OnInit {

  service = inject(EbookService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ebook = signal<Ebook>({
    id: 0,
    title: "",
    author: "",
    price: 0
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const ebookToEdit = this.service.getEbookById(+id!);
    if (ebookToEdit != undefined)
      this.ebook.set(ebookToEdit);
  }

  editEbook() {
    this.service.editEbook(this.ebook());
    this.router.navigate(['/ebooks']);
  }
}
