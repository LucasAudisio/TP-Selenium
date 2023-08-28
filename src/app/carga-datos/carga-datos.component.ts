import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-datos',
  templateUrl: './carga-datos.component.html',
  styleUrls: ['./carga-datos.component.css']
})
export class CargaDatosComponent {
  apellido: String = "";
  nombre: String = "";
  DNI: String = "";
  respuesta: String = "";
  errorRespuesta: String = "";
  huboError: boolean = false;
  NohuboError: boolean = false;

  constructor(){

  }

  comprobacion(){
    this.respuesta = "";
    this.errorRespuesta = "";
    this.NohuboError = false;
    this.huboError = false;

    if(localStorage.getItem("inicio") != "si" || localStorage.getItem("inicio") == null){
      this.huboError = true;
      this.errorRespuesta = "No se inicio sesion"
    }
    else if(this.apellido != "" && this.nombre!= "" && isNaN(Number(this.DNI))==false && this.DNI != ""){
      this.NohuboError = true;
      this.respuesta = "Se subieron los datos correctamente"
    }
    else{
      this.huboError = true;
      this.errorRespuesta = "Hubo un error al subir los datos"
    }
  }
}
