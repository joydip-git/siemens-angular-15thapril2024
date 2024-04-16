import { Component } from "@angular/core";
//import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-main',
    //standalone:true,
    //imports: [RouterOutlet],
    template: `<h2>Welcome to Angular</h2>`
})
export class AppComponent {
    constructor() {
        console.log('App component created')
    }
}