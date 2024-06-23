import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { FriendService } from '../friend-list/friendService';
import { FormsModule } from '@angular/forms';

import { MessageService } from '../message-post/message.service';
import { AuthService } from '../home/auth.service';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent }];

// import { MembresComponent } from "../membres/membres.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [UserService, FriendService, MessageService, AuthService],
  exports: [],
})
export class userModule {}
