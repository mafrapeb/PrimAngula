import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

NombreJugador: string = 'Ronaldinhosss';
	Edad: number;
	Equipos:{
		Pais: string;
		NombreEquipo: string;
		ValorContraro: number;
	}
	Cualidades: string[];

	constructor() {
		this.Edad = 36;
		this.Equipos = {
			Pais: 'Brasil',
			NombreEquipo: 'Gremio',
			ValorContraro: 35000
		};
		this.Cualidades = ['Magia', 'Regate', 'Sonrisa Eterna'];
	}

	ngOnInit() {
	}

	title: string = 'Ejemplo 3';

	description: string = 'Objetos';



}

