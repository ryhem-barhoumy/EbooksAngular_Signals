import { Injectable, signal, computed } from '@angular/core';
import { Ebook } from './ebook';

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooks = signal<Ebook[]>([
    { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 30 },
    { id: 2, title: 'The slight edge', author: 'Jeff Olsen', price: 25 }
  ]);


  ebooksCount = computed(() => this.ebooks().length);

  getEbooks() {
    return this.ebooks(); 
  }

  getEbookById(id: number): Ebook | undefined {
    return this.ebooks().find(e => e.id === id);
  }

  getLastId(): number {
    return this.ebooks().length > 0
      ? this.ebooks()[this.ebooks().length - 1].id
      : 0;
  }

  addEbook(ebook: Ebook): void {
    this.ebooks.update(list => [...list, ebook]);
  }

  editEbook(ebook: Ebook): void {
    this.ebooks.update(list =>
      list.map(e => (e.id === ebook.id ? ebook : e))
    );
  }

  deleteEbook(id: number): void {
    this.ebooks.update(list =>
      list.filter(e => e.id !== id)
    );
  }
}
