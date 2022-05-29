import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class PostService {
  abstract getPost(): Observable<PostList>;
}

export type PostList = IPost[];

export interface IPost {
  name: string;
  author: string;
}
