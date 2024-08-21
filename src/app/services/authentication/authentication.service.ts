import { Injectable } from '@angular/core';
import { JwtToken } from './authentication.model';
import { of } from 'rxjs/internal/observable/of';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _token!: JwtToken;

  public authenticate() : Observable<JwtToken> {
    //TODO implement real auth
    return of({
      user: 'testUser',
      iss: 'tempIssueser',
      exp: 'tempExpiration',
      clearances: ['all']
    }
  ).pipe(tap((result: JwtToken) => this._token = result))
  }

  public get token() {
    return this._token;
  }

  public isExpired() {
    return false;
  }
}
