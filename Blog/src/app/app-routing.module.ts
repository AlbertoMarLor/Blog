import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'Blog/posts' },
  { path: 'Blog/posts', component: ListaPostsComponent },
  /*   { path: 'blog/new', component: FormularioComponent }, */
  { path: '**', redirectTo: 'Blog/posts' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
