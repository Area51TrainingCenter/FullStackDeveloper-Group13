import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	novelas = [
		{ titulo: "El caballero Carmelo", autor: "Abraham Valdelomar", sinopsis: "Narra la historia de un gallo viejo llamado Carmelo que pelea con un gallo joven llamado el Aji Seco", fecha: new Date() },
		{ titulo: "El Perfume", autor: "Patrick Suskind", sinopsis: "Cuenta la historia de un asesino que mataba mujeres para robar su esencia y crear el mejor perfume del mundo", fecha: new Date() },
		{ titulo: "Jason y los argonautas", autor: "Herodoto", sinopsis: "Un mito que narra las aventuras de un semiheroe llamado Jason en la busqueda del vellocino de oro", fecha: new Date() },
		{ titulo: "Pantaleon y las visitadoras", autor: "Mario Vargas Llosa", sinopsis: "Novela basada en el servicio de visitadores del Ejercito destacado en la selva", fecha: new Date() }
	]
}
