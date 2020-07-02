import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  loveIts = 0;

  constructor() { }
  ngOnInit() {
  }

  onloveIts() {
    console.log(this.loveIts)
    this.loveIts++;
  }
  onNotLoveIts(){
    console.log(this.loveIts)
    this.loveIts--;
  }
}
