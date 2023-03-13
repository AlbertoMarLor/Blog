import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  posts: Post[]


  constructor(private postsServices: PostsService) {

    this.posts = []

  }

  ngOnInit() {
    this.posts = this.postsServices.getAll()
    localStorage.setItem('Post', JSON.stringify(this.posts));


  }
  onChange($event: any) {
    if ($event.target.value === "") {
      this.posts = this.postsServices.getAll()
    } else {
      this.posts = this.postsServices.getByCategoria($event.target.value)
    }
  }

}
