import { Component } from '@angular/core';

/* interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
} */

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  /* file: File | null = null;
  imageSelected: ArrayBuffer | string | null = null; */

  /* onUploadImage(e: HtmlInputEvent): void {
    if (e.target.files && e.target.files[0]) {
      this.file = <File>e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  } */
  handleSubmit() {}
}
