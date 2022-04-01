import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  buttonText!: string;

  // add service in constructor
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
  }

  onViewFaceSnap(): void {
    this.route.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }
}
