import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeViewComponent } from './home.view.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule
    ],
    declarations: [
        HomeViewComponent
    ]
})
export class HomeModule { }