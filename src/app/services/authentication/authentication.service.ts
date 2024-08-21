import { Injectable } from '@angular/core';
import { JwtToken } from './authentication.model';
import { of } from 'rxjs/internal/observable/of';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private jwtToken!: JwtToken;

  authenticate() : Observable<JwtToken> {
    //TODO implement real auth
    return of({
      user: 'testUser',
      iss: 'tempIssueser',
      exp: 'tempExpiration',
      clearances: ['all']
    }
  ).pipe(tap((result: JwtToken) => this.jwtToken = result))
  }
}
