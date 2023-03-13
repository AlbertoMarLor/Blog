import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;


  constructor(private postsService: PostsService,
    private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null),

      fecha: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),

    });

  }


  crearPost() {
    this.postsService.create(this.formulario.value);

    this.router.navigate(['/Blog/posts']);
  }


  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched

  }


}


