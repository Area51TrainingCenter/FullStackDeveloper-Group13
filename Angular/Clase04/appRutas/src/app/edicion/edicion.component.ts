import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
	id: number

	constructor(private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.params.id + 10
		//console.log("id = ", id)
	}

}
