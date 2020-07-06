import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Mon Blog";
  post = [
    {
      title: "Noël au balcon",
      content: "Ce soir c'est le réveillon !",
      loveIts: 0,
      created_at: new Date(2017, 11, 24, 18, 23, 31)
    },
    {
      title: "Bonne année !!!",
      content: "Tout est dans le titre",
      loveIts: 0,
      created_at: new Date(2018, 0, 1, 9, 2, 18)
    },
    {
      title: "Révolution",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date(2018, 6, 14, 11, 55, 48)
    }
  ];
}
