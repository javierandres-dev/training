import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService
  ) {}

  user = {
    email: '',
    password: '',
  };

  login() {
    //console.log('login...');
    //console.log('user:', this.user);
    if (!this.user.email || !this.user.password) {
      this.toastr.warning('All fields are required.', 'Warning!');
    } else {
      this.loginService.login(this.user).subscribe(
        (res) => {
          //console.log(res);
          if (res.token) {
            const decoded = this.jwtHelper.decodeToken(res.token);
            //console.log('decoded:', decoded);
            this.toastr.success(`Welcome, ${decoded.name}!`, 'Success!');
            localStorage.setItem('token', res.token);
            this.router.navigate(['/tasks']);
          } else {
            this.toastr.warning(`${res.message}.`, 'Warning!');
          }
        },
        (err) => {
          //console.log(err);
          this.toastr.error(
            `${
              err.error.message || 'An error occurred, please try again later.'
            }`,
            'Error!'
          );
        }
      );
    }
  }
}
