import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SecondComponent } from "./second/second.component";

@NgModule({
    //to register components, pipes and directives ONLY
    declarations: [AppComponent, SecondComponent],
    //to register services ONLY
    providers: [],
    //to register other modules (built-in and your child modules) ONLY
    imports: [BrowserModule],
    //mention the name(s) of default root component(s) whose design(s) will be rendered by default in the index.html file
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('App module created')
    }
}