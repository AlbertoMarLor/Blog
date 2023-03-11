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
      },
      {
        titulo: 'Saturno flotaria en agua',
        texto: 'De entre las muchas propiedades curiosas de los planetas y cuerpos del Sistema Solar hay una que destaca: la baja densidad de Saturno, menor que la densidad del agua líquida, propiedad que lo haría flotar, dadas las condiciones necesarias, sobre una piscina llena de agua',
        autor: 'Alberto',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
        fecha: '11/03/2023',
        categoria: 'curiosidades'
      },

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
