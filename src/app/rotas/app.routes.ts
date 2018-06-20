import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { NotFoundComponent } from '../erro/notFound.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "eventos", component: CadastroComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: NotFoundComponent }
];