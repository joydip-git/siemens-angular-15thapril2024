import { Component } from "@angular/core";
//import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    //standalone:true,
    //imports: [RouterOutlet],
    // template: `
    //     <h2>Welcome to Angular</h2>
    //     <br/>
    //     <app-second></app-second>
    // `
})
export class AppComponent {
    title: string = 'Welcome to Angular'
    headerWidth = 100
    show = false
    numbers = [1, 2, 3, 4]
    employees = [{
        name: 'anil',
        id: 1,
        salary: 1000
    }, {
        name: 'sunil',
        id: 2,
        salary: 2000
    }]
    constructor() {
        console.log('App component created')
    }
    changeShow() {
        this.show = !this.show
    }
    changeWidth(width: string): void {
        console.log(width)
        this.headerWidth = parseInt(width)
    }
}