import { Component, inject } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css',
})
export class GiftsComponent {
  httpService: GiftsService = inject(GiftsService);
  initialAllGifts: any[] = [];
  allGifts: any[] = [];

  giftId: string = '';
  modalTitle: string = '';
  modalBody: string = '';
  modalButton: string = '';
  modalBtnColor: string = '';

  handleCloseModal() {
    console.log('handleCloseModal...');
    this.giftId = '';
    this.modalTitle = '';
    this.modalBody = '';
    this.modalButton = '';
  }

  handleCtaModal() {
    console.log('handleCtaModal...');
    const cta = this.modalButton;
    if (cta === 'Create') {
      console.log('create...');
    } else {
      const id: string = this.giftId;
      if (cta === 'Update') {
        console.log('update id:', id);
      }
      if (cta === 'Delete') {
        console.log('delete id:', id);
        this.httpService.deleteGift(id).subscribe((res: any) => {
          console.log(res);
          this.handleCloseModal();
          this.getAllGifts();
        });
      }
    }
  }

  handleAdd() {
    console.log('handleAdd...');
    this.modalTitle = 'Add Gift';
    this.modalButton = 'Create';
    this.modalBtnColor = 'primary';
  }
  handleView(id: string) {
    console.log('handleView...');
    this.giftId = id;
    this.modalTitle = 'View Gift';
    this.modalBtnColor = 'outline-light';
  }
  handleEdit(id: string) {
    console.log('handleEdit...');
    this.giftId = id;
    this.modalTitle = 'Edit Gift';
    this.modalButton = 'Update';
    this.modalBtnColor = 'warning';
  }
  handleDelete(id: string) {
    console.log('handleDelete...');
    this.giftId = id;
    this.modalTitle = 'Delete Gift';
    this.modalBody = 'Are you sure you want to delete this gift?';
    this.modalButton = 'Delete';
    this.modalBtnColor = 'danger';
  }

  getAllGifts() {
    this.httpService.getAllGifts().subscribe((res: any) => {
      console.log(res);
      this.initialAllGifts = this.allGifts = res.datos;
      console.log(this.initialAllGifts);
      console.log(this.allGifts);
    });
  }

  ngOnInit() {
    this.getAllGifts();
  }
}
