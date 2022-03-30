import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

// root - instancié une fois au root de l'application
@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(
      'http://localhost:3000/facesnaps/' + faceSnapId
    );
  }

  // pour apprendre le type litteral
  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'snape' | 'unsnap'
  ): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snape' ? 1 : -1),
      })),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnap>(
          'http://localhost:3000/facesnaps/' + faceSnapId,
          updatedFaceSnap
        )
      )
    );
  }

  addFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap> {
    // return this.getAllFaceSnaps().pipe(
    //   filter()
    // )
    // faceSnap.id = this.getAllFaceSnaps().pipe(
    // )
    // [this.faceSnaps.length - 1].id++;
    // faceSnap.snaps = 0;
    // faceSnap.creatinDate = new Date();
    // this.faceSnaps.push(faceSnap);
  }
}
