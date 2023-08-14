import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaDatosComponent } from './carga-datos/carga-datos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: "inicio"
  },
  {
    path:'login',
    component: LoginComponent,
    title: "Inicio Sesion"
  },
  {
    path:'cargaDatos',
    component: CargaDatosComponent,
    title: "carga datos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
