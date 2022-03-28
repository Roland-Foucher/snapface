import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

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
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  //Solution 1
  onClickSnap() {
    this.faceSnap.snaps = this.snapped
      ? (this.faceSnap.snaps -= 1)
      : (this.faceSnap.snaps += 1);
    this.snapped = !this.snapped;
  }
  // Solution OCR
  // recupération des methode du service

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snape');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
    this.snapped = !this.snapped;
  }
}
