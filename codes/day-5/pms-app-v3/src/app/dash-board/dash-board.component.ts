import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  constructor(private router: Router) {

  }
  get isLogged() {
    return sessionStorage.getItem('token')
  }
  logout() {
    if (this.isLogged) {
      sessionStorage.removeItem('token')
    }
    this.router.navigate(['/login'])
  }
}
