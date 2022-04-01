import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = 'myFakeToken';

  getToken(): string {
    return this.token;
  }
}
