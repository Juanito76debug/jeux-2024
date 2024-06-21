import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService, UserRole } from './home/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MemberAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getUserRoleSync();

    if (role === UserRole.Visitor) {
      this.router.navigate(['/login']);
      return false;
    }
    return role === UserRole.Admin || role === UserRole.Member;
  }
}
