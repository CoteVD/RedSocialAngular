import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';



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
    public router:Router
    ) {}

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.AuthService.signup(this.email, this.password)
    .then ((res) => {
      this.router.navigate(['private']);
      console.log("Registro con exito!");
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

}
