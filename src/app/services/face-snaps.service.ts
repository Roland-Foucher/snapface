import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// root - instancié une fois au root de l'application
@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'title',
      description: 'mon facesnap',
      creatinDate: new Date(),
      imgURL:
        'https://tse2.mm.bing.net/th?id=OIP.LXWCLJ9xu7dCkL_53aodqAHaJ4&pid=Api',
      snaps: 100,
      location: 'Lyon',
    },
    {
      id: 2,
      title: 'mon snape',
      description: "c'est chouette",
      creatinDate: new Date(),
      imgURL:
        'https://tse2.mm.bing.net/th?id=OIP.XpacSt8FfbgS25OVYrFmEQHaHa&pid=Api',
      snaps: 12,
      location: 'Paris',
    },
    {
      id: 3,
      title: 'hohohoh',
      description: "c'est la fête",
      creatinDate: new Date(),
      imgURL:
        'https://tse4.mm.bing.net/th?id=OIP.5x-WzZJv-2nYCgYCgj4U2QHaFh&pid=Api',
      snaps: 200,
    },
    {
      id: 4,
      title: 'title',
      description: 'mon facesnap',
      creatinDate: new Date(),
      imgURL:
        'https://tse2.mm.bing.net/th?id=OIP.LXWCLJ9xu7dCkL_53aodqAHaJ4&pid=Api',
      snaps: 10,
      location: 'Lyon',
    },
    {
      id: 5,
      title: 'mon snape',
      description: "c'est chouette",
      creatinDate: new Date(),
      imgURL:
        'https://tse2.mm.bing.net/th?id=OIP.XpacSt8FfbgS25OVYrFmEQHaHa&pid=Api',
      snaps: 12,
      location: 'Paris',
    },
    {
      id: 6,
      title: 'hohohoh',
      description: "c'est la fête",
      creatinDate: new Date(),
      imgURL:
        'https://tse4.mm.bing.net/th?id=OIP.5x-WzZJv-2nYCgYCgj4U2QHaFh&pid=Api',
      snaps: 14,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      return faceSnap;
    }
    throw new Error('faceSnap not found !');
  }

  // pour apprendre le type litteral
  snapFaceSnapById(faceSnapId: number, snapType: 'snape' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snape' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
