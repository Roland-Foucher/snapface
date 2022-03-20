import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
  }

  //Solution 1
  onClickSnap() {
    this.faceSnap.snaps = this.snapped
      ? (this.faceSnap.snaps -= 1)
      : (this.faceSnap.snaps += 1);
    this.snapped = !this.snapped;
  }
  // Solution OCR

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
