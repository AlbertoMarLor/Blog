import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'Blog/posts' },
  { path: 'Blog/posts', component: ListaPostsComponent },
  { path: 'Blog/new', component: FormularioComponent },
  { path: '**', redirectTo: 'Blog/posts' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
