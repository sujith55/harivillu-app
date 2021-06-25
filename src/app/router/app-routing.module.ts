import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LayoutComponent } from '../components/home/layout/layout.component';
import { LayoutsComponent } from '../components/home/layouts/layouts.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        pathMatch:'full'
    },
    {
        path:':id',
        component: LayoutComponent
    },
    {path:'**', redirectTo:'/' }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class AppRoutingModule{ }