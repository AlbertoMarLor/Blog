import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[]


  constructor() {

    this.posts = [
      {
        titulo: 'Bienvenida',
        texto: 'Bienvenid@ al Blog',
        autor: 'Alberto',
        imagen: 'https://www.adgully.com/img/800/51481_holii.jpg',
        fecha: '11/03/2023',
        categoria: 'general'
      }
    ]

  }
  /* 
    create(Post) {
  
    }
   */
  getAll() {
    return this.posts
  }

  /*  getByCategoria(cat) {
 
 
   } */

}
