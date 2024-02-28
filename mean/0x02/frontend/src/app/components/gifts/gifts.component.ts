import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { GiftsService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gifts';
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css',
})
export class GiftsComponent {
  constructor(private http: HttpClient) {}

  loginService = inject(LoginService);
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

  username: string = '';

  search = {
    term: '',
  };

  searchResult: any[] = [];

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
        //this.toastrService.info(res.mensaje);
      } else {
        this.toastrService.error(res.mensaje);
      }
    });
  }

  handleSubmitSearch() {
    console.log(this.search.term);
    this.searchResult = this.allGifts.filter(
      (g) => g.destinatario === this.search.term
    );
    console.log(this.searchResult);
  }

  handleKeyupSearch() {
    console.log(this.search.term);
    const term = this.search.term.toLowerCase();
    console.log(term);
    const result = this.allGifts.filter(
      (g) => g.destinatario.toLowerCase().indexOf(term) > -1
    );
    console.log(result);
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.validateToken(token).subscribe((respuesta: any) => {
        if (respuesta.resultado === 'bien') {
          this.username = respuesta.datos.nombre;
          this.toastrService.success(`Hello, ${this.username}!`);
          this.getAllGifts();
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  }

  //uploadedFileNames: string[] = [];

  uploadImage(event: any) {
    //console.log(event);
    //const file = event.currentTarget.files[0];
    const file = event.target.files[0];
    console.log(file);
    if (file.type === 'image/png') {
      const formData = new FormData();
      formData.append('archivo_subido', file);
      console.log(formData);
      this.http
        .post('http://localhost:4100/imagenes', formData)
        .subscribe((res: any) => {
          console.log('res:', res);
          //this.uploadedFileNames.push(res);
          //console.log(this.uploadedFileNames);
        });
    } else {
      this.toastrService.error("Only 'png' files are allowed");
    }
  }
}
