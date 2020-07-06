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
      title: "Croisiere sur le Tage",
      content: "Awesome croisiere on the Tage, departure from Lisboa, arrival in Sexal",
      loveIts: 0,
      created_at: new Date(2019, 11, 24, 18, 23, 31)
    },
    {
      title: "Strip club Party",
      content: "Stripclub party in Mafra...",
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
