import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: String = '';
  password: String = '';
  error: String = "";

  constructor(private router: Router) {
  }


  Log_in() {
    if (this.email == "pepe@gmail.com" && this.password == "123456") {
      this.router.navigate(["/"])
    }
    else{
      this.error = "Mail o contraseña incorrecto"
    }
  }
}
