import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

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
    public router:Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    this.AuthService.login(this.email, this.password)
    .then ((res) => {
      this.router.navigate(['private']);
      console.log("Login con exito!");
      console.log(res);
    }).catch((err) => {
      this.router.navigate(['login']);
      console.log(err);
    })
  }

}
