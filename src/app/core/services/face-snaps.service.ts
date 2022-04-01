import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, lastValueFrom, map, Observable, switchMap } from 'rxjs';
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

  addFaceSnapOCR(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map((facesnaps) => [...facesnaps].sort((a, b) => a.id - b.id)),
      map((sortedFacesnaps) => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map((previousFacesnap) => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFacesnap.id + 1,
      })),
      switchMap((newFacesnap) =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap)
      )
    );
  }

  addFaceSnap(newFaceSnap: FaceSnap): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map((facesnaps: FaceSnap[]) => {
        let sortedFaceSnap: FaceSnap[] = facesnaps.sort((a, b) => a.id - b.id);
        newFaceSnap.id = sortedFaceSnap[sortedFaceSnap.length - 1].id + 1;
        newFaceSnap.snaps = 0;
        newFaceSnap.creatinDate = new Date();
        return newFaceSnap;
      }),
      switchMap((faceSnap: FaceSnap) =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', faceSnap)
      )
    );
  }
}
