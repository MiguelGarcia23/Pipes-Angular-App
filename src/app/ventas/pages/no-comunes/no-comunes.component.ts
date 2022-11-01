import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Miguel';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    if( this.nombre === 'Miguel') {
      this.nombre = 'María';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Miguel';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Daryl',
    edad: 40,
    direccion: 'Virginia, USA'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  })

}
