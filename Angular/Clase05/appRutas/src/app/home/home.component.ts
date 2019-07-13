import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private auth: AuthService) { }

	ngOnInit() {
	}

	login(rol: string) {
		this.auth.login(rol)
	}

	logout() {
		this.auth.logout()
	}

}
