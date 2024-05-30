import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const randomGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return Math.random() > 0.5 ? true : router.createUrlTree(['/']);
};
