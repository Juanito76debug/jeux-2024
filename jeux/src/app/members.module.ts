import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

import { MembersPageComponent } from './Members-Page.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MembersPageComponent],
  exports: [ProfileComponent, MembersPageComponent],
  imports: [
    CommonModule,
    ProfileComponent,
    FriendListComponent,
    UserSearchComponent,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class MembersModule {}
