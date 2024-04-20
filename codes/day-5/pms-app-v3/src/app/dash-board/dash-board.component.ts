import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  isLogged = false;
  constructor(private router: Router) {
    if (sessionStorage.getItem('token'))
      this.isLogged = true
  }
  logout() {
    sessionStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
