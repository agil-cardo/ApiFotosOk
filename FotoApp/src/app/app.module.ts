import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FotosListComponent } from './fotos-list/fotos-list.component';
import { FotoEditComponent } from './foto-edit/foto-edit.component';
import { FotoCreateComponent } from './foto-create/foto-create.component';


@NgModule({
  declarations: [
    AppComponent,
    FotosListComponent,
    FotoEditComponent,
    FotoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
