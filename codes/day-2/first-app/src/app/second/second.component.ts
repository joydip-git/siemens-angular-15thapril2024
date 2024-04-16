import { Component } from "@angular/core";

@Component({
    selector: 'app-second',
    template: `<h2>second component</h2>`
})
export class SecondComponent {
    constructor() {
        console.log('second component created')
    }
}