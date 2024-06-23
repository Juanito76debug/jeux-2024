import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-members-page',
  template: `
    <app-profile></app-profile>
    <app-friend-list></app-friend-list>
    <app-user-search></app-user-search>
  `,
  styles: [],
})
export class MembersPageComponent {}
