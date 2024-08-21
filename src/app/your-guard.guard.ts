import { CanActivateFn } from '@angular/router';

export const isAuthorized: CanActivateFn = (route, state) => {
  return true;
};
