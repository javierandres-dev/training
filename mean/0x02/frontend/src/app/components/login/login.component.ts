import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credential } from '../../interfaces/credential';
import { LoginService } from '../../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

export const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  httpService: LoginService = inject(LoginService);
  toastrService = inject(ToastrService);

  /* credentialsForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); */
  credentialsForm = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  });

  handleSubmit() {
    console.log('handle submit...');
    //    console.log(this.credentialsForm);
    //    console.log(this.credentialsForm.value);

    if (this.credentialsForm.valid) {
      console.log(this.credentialsForm.value.nombreUsuario);
      console.log(this.credentialsForm.value.contrasenia);

      const nombreUsuario = this.credentialsForm.value.nombreUsuario;
      const contrasenia = this.credentialsForm.value.contrasenia;

      if (
        typeof nombreUsuario === 'string' &&
        typeof contrasenia === 'string'
      ) {
        const credential: Credential = {
          nombreUsuario,
          contrasenia,
        };

        this.httpService.login(credential).subscribe((res: any) => {
          console.log('res:', res);
          if (res.resultado === 'bien') {
            const decoded = jwtHelperService.decodeToken(res.datos.token);
            console.log('decoded:', decoded);
            this.toastrService.success(res.mensaje);
          } else {
            this.toastrService.error(res.mensaje);
          }
        });
      }
    }
  }
}
