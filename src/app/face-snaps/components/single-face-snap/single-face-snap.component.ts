import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;

  snapped!: boolean;
  buttonText!: string;

  // add service in constructor
  constructor(
    private faceSnapsService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id']; // + permet de convertir string to number
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  // Solution OCR
  // recupération des methode du service

  onSnap(faceSnap: FaceSnap) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnap.id, 'snape')
        .pipe(tap(() => (this.buttonText = 'Oops, unSnap!')));
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnap.id, 'unsnap')
        .pipe(tap(() => (this.buttonText = 'Oh Snap!')));
    }
    this.snapped = !this.snapped;
  }
}
