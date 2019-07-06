import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

	constructor(private rutaActiva: ActivatedRoute) { }

	ngOnInit() {
		const id = this.rutaActiva.snapshot.params.id
		console.log("id = ", id)
	}

}
