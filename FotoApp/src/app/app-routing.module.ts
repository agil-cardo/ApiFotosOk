import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoCreateComponent } from './foto-create/foto-create.component';
import { FotosListComponent } from './fotos-list/fotos-list.component';
import { FotoEditComponent } from './foto-edit/foto-edit.component';


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'fotos-list'},
  {path: 'foto-create', component: FotoCreateComponent },
  {path: 'fotos-list', component: FotosListComponent },
  {path: 'fotos-edit/:id', component: FotoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
