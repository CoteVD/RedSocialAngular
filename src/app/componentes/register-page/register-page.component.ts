import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    public AuthService: AuthService,
    public router:Router,
    public flashMessage: FlashMessagesService
    ) {}

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.AuthService.signup(this.email, this.password)
    .then ((res) => {
      this.flashMessage.show('Usuario creado correctamente.', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['private']);
      console.log("Registro con exito!");
      console.log(res);
    }).catch((err) => {
      this.flashMessage.show('Usuario existente.', {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
    })
  }

}
