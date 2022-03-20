import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'title',
        description: 'mon facesnap',
        creatinDate: new Date(),
        imgURL:
          'https://tse2.mm.bing.net/th?id=OIP.LXWCLJ9xu7dCkL_53aodqAHaJ4&pid=Api',
        snaps: 100,
        location: 'Lyon',
      },
      {
        title: 'mon snape',
        description: "c'est chouette",
        creatinDate: new Date(),
        imgURL:
          'https://tse2.mm.bing.net/th?id=OIP.XpacSt8FfbgS25OVYrFmEQHaHa&pid=Api',
        snaps: 12,
        location: 'Paris',
      },
      {
        title: 'hohohoh',
        description: "c'est la fête",
        creatinDate: new Date(),
        imgURL:
          'https://tse4.mm.bing.net/th?id=OIP.5x-WzZJv-2nYCgYCgj4U2QHaFh&pid=Api',
        snaps: 200,
      },
      {
        title: 'title',
        description: 'mon facesnap',
        creatinDate: new Date(),
        imgURL:
          'https://tse2.mm.bing.net/th?id=OIP.LXWCLJ9xu7dCkL_53aodqAHaJ4&pid=Api',
        snaps: 10,
        location: 'Lyon',
      },
      {
        title: 'mon snape',
        description: "c'est chouette",
        creatinDate: new Date(),
        imgURL:
          'https://tse2.mm.bing.net/th?id=OIP.XpacSt8FfbgS25OVYrFmEQHaHa&pid=Api',
        snaps: 12,
        location: 'Paris',
      },
      {
        title: 'hohohoh',
        description: "c'est la fête",
        creatinDate: new Date(),
        imgURL:
          'https://tse4.mm.bing.net/th?id=OIP.5x-WzZJv-2nYCgYCgj4U2QHaFh&pid=Api',
        snaps: 14,
      },
    ];
  }
}
