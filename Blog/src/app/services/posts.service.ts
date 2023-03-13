import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[]


  constructor() {

    this.posts = [
      {
        titulo: 'Bienvenida',
        texto: 'Bienvenid@ al Blog!',
        autor: 'Alberto',
        imagen: 'https://www.adgully.com/img/800/51481_holii.jpg',
        fecha: new Date('2023-3-13'),
        categoria: 'general'
      },
      {
        titulo: 'Saturno flotaria en agua',
        texto: 'De entre las muchas propiedades curiosas de los planetas y cuerpos del Sistema Solar hay una que destaca: la baja densidad de Saturno, menor que la densidad del agua líquida, propiedad que lo haría flotar, dadas las condiciones necesarias, sobre una piscina llena de agua',
        autor: 'Alberto',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
        fecha: new Date('2023-3-13'),
        categoria: 'curiosidades'
      },
      {
        titulo: 'El santuario Itsukushima de Miyajima',
        texto: 'Con su enorme torii rojo situado en el mar, el santuario Itsukushima en la isla de Miyajima atrae a muchos turistas año tras año, pero es que ¿quién puede cansarse de esta vista? Merece la pena pasar el día en Miyajima, tanto para ver cómo cambia la zona según la marea como para disfrutar de una preciosa puesta de sol desde aquí. De hecho, es uno de los tres paisajes más bellos de Japón (Nihon Sankei, en japonés)… ¡y no nos extraña!',
        autor: 'Takeshi',
        imagen: 'https://live.staticflickr.com/4883/46701793171_fa4555678d_b.jpg',
        fecha: new Date('2023-3-13'),
        categoria: 'viajes'
      },


    ]

  }


  getAll() {
    if (localStorage.getItem('Posts')) {
      this.posts = JSON.parse(localStorage.getItem('Posts')!)
    }
    return this.posts
  }


  create(Post: Post) {
    this.posts.push(Post)
    localStorage.setItem('Posts', JSON.stringify(this.posts))
  }



  getByCategoria(cat: string) {

    return this.posts.filter(post => post.categoria === cat)
  }

}

