import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss'],
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/; // regex URL
    this.snapForm = this.formBuilder.group(
      {
        // création du formulaire en forme d'objet
        title: [null, Validators.required],
        description: [null, Validators.required],
        imgURL: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)], // plusieurs validators = tableaux
        ],
        location: [null],
      },
      {
        updateOn: 'blur', // ecoute le form que lorsque l'on sort du champs
      }
    );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      // ajoute les attributs manquants d'un facesnap pour l'afficher sans erruers
      // écoute le form à chaque changement
      map((formValue) => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm() {
    this.faceSnapService
      .addFaceSnap(this.snapForm.value)
      .pipe(tap(() => this.router.navigateByUrl('/facesnaps')))
      .subscribe();
  }
}
