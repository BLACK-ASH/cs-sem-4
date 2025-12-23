import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post, Test } from './services/test';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('http-request');

  postService = inject(Test)

  posts = signal<Post[]>([])

  postForm = new FormGroup({
    userId : new FormControl(0),
    title : new FormControl(""),
    body : new FormControl(""),
  })

  sendPost() {

    if (!this.postForm.value) return

    const post = {
      userId: this.postForm.value.userId,
      title: this.postForm.value.title,
      body: this.postForm.value.body
    }

    this.postService.postPost(post as Post).subscribe(res => {
      console.log(res);
      alert(JSON.stringify(res))
      this.postForm.reset()
    })
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(res => this.posts.set(res))
  }

}
