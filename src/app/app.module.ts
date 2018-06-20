import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './rotas/app.routes'; //deve vir primeiro, antes dos componentes que participarão da rota

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubLista } from './filters/sublista.filter';

//usado nas rotas
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { EventosService } from './services/eventos.service';

@NgModule({ //decorator... neste caso significa que esta classe é um modulo do angular
  //lista os modulos que a aplicação necessitara
  imports: [BrowserModule,
            RouterModule.forRoot(appRoutes),
            FormsModule, HttpModule], //todos os modulos

  //lista os componentes que nossa aplicação utilizará
  declarations: [AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent,
    SubLista], //todos os componentes

    //até o serviço criado deve ser declarado no app.module
    providers : [ EventosService ],

  //este é o componente inicial, incluído no index.html
  bootstrap: [AppComponent] //define o componente inicial... utilizado uma única vez
})
export class AppModule { }
