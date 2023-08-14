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

  constructor(){

  }

  comprobacion(){
    if(this.apellido != "" && this.nombre!= "" && isNaN(Number(this.DNI))==false){
      this.respuesta = "Se subieron los datos correctamente"
    }
    else{
      this.respuesta = "Hubo un error al subir los datos"
    }
  }
}
