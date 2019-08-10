import { Component } from '@angular/core';
import { AlumnoService } from './alumno.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private alumnoService: AlumnoService) { }

	ngOnInit() {
		this.alumnoService.listar()
			.subscribe(
				data => console.log(data)
			)
	}
}
