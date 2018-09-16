import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public AuthService: AuthService,
    public router:Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.AuthService.login(this.email, this.password)
    .then ((res) => {
      this.flashMessage.show('Usuario logueado correctamente.', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['private']);
      console.log("Login con exito!");
      console.log(res);
    }).catch((err) => {
      this.flashMessage.show('Usuario y/o contraseña incorrecta.', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['login']);
      console.log(err);
    })
  }

  loginGoogle(){
    this.AuthService.googleLogin()
    .then((res) => {
      this.router.navigate(['private']);
    }).catch(err => console.log(err.message));
  }

  loginFacebook(){
    this.AuthService.facebookLogin()
    .then((res) => {
      this.router.navigate(['private']);
    }).catch(err => console.log(err.message));
  }

}
