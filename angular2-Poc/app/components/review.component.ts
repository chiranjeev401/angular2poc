import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'reviews',
    templateUrl: 'review.component.html',
    providers: [PostsService]
})
export class ReviewComponent  { 
  posts:Post[];
  constructor(private postsService: PostsService){    
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
  }
}

interface Post{
    id: number;
    title: string;
    body: string;
}
