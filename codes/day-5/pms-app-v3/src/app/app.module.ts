import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        BrowserModule, ProductsModule, RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, HomeComponent, PageNotFoundComponent, DashBoardComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
