import { Component, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EbookService } from '../ebook-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-add',
  standalone: false,
  templateUrl: './ebooks-add.html',
  styleUrl: './ebooks-add.css'
})
export class EbooksAdd {

  ebooksSrvc = inject(EbookService);
  router = inject(Router);

  // signal pour le formulaire
  newEbook = signal({
    title: '',
    author: '',
    price: 0
  });

  addEbook(f: NgForm) {
    const ebookToAdd = {
      id: this.ebooksSrvc.getLastId() + 1,
      title: f.value.title,
      author: f.value.author,
      price: +f.value.price
    };

    this.ebooksSrvc.addEbook(ebookToAdd);

    this.router.navigate(['/ebooks']);
  }
}
