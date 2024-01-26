import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiftsService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gifts';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css',
})
export class GiftsComponent {
  httpService: GiftsService = inject(GiftsService);
  toastrService = inject(ToastrService);

  initialGift: Gift = {
    destinatario: '',
    nombre: '',
    entregado: false,
  };
  gift: Gift = this.initialGift;
  allGifts: any[] = [];

  giftId: string = '';

  modalTitle: string = '';
  modalButton: string = '';
  modalBtnColor: string = '';

  handleCloseModal() {
    this.gift = this.initialGift;
    this.giftId = '';
    this.modalTitle = '';
    this.modalButton = '';
    this.modalBtnColor = '';
  }

  handleCtaModal() {
    if (this.modalButton === 'Create') {
      this.httpService.postGift(this.gift).subscribe((res: any) => {
        if (res.resultado === 'bien') {
          this.toastrService.success(res.mensaje);
        } else {
          this.toastrService.error(res.mensaje);
        }
        this.handleCloseModal();
        this.getAllGifts();
      });
    } else {
      if (this.modalButton === 'Update') {
        this.httpService
          .updateGift(this.giftId, this.gift)
          .subscribe((res: any) => {
            if (res.resultado === 'bien') {
              this.toastrService.success(res.mensaje);
            } else {
              this.toastrService.error(res.mensaje);
            }
            this.handleCloseModal();
            this.getAllGifts();
          });
      } else if (this.modalButton === 'Delete') {
        this.httpService.deleteGift(this.giftId).subscribe((res: any) => {
          if (res.resultado === 'bien') {
            this.toastrService.success(res.mensaje);
          } else {
            this.toastrService.error(res.mensaje);
          }
          this.handleCloseModal();
          this.getAllGifts();
        });
      }
    }
  }

  handleAdd() {
    this.modalTitle = 'Add Gift';
    this.modalButton = 'Create';
    this.modalBtnColor = 'primary';
  }

  handleView(id: string) {
    this.modalTitle = 'View Gift';
    this.modalButton = 'View';
    this.modalBtnColor = 'outline-light';
    this.httpService.getGift(id).subscribe((res: any) => {
      if (res.resultado === 'bien') {
        this.gift = res.datos;
        this.toastrService.info(res.mensaje);
      } else {
        this.toastrService.error(res.mensaje);
      }
    });
  }

  handleEdit(id: string) {
    this.giftId = id;
    this.modalTitle = 'Edit Gift';
    this.modalButton = 'Update';
    this.modalBtnColor = 'warning';
    this.httpService.getGift(this.giftId).subscribe((res: any) => {
      this.gift = res.datos;
    });
  }

  handleDelete(id: string) {
    this.giftId = id;
    this.modalTitle = 'Delete Gift';
    this.modalButton = 'Delete';
    this.modalBtnColor = 'danger';
  }

  getAllGifts() {
    this.httpService.getAllGifts().subscribe((res: any) => {
      if (res.resultado === 'bien') {
        this.allGifts = res.datos;
        this.toastrService.info(res.mensaje);
      } else {
        this.toastrService.error(res.mensaje);
      }
    });
  }

  ngOnInit() {
    this.getAllGifts();
  }
}
