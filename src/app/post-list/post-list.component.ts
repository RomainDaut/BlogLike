import { Component, OnInit } from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  Posts: Post[] = [
    {
     title: 'My First Post',
     content: 'This is an awesome post innit',
     loveIts: 0,
     created_at: new Date()
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
