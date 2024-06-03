import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService, UserRole } from './home/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getUserRoleSync();
    if (role !== UserRole.Visitor) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
