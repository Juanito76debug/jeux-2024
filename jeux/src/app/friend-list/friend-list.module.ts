import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friend-list.component';
import { FriendService } from './friendService';
import { MessageService } from '../message-post/message.service';
import { AuthService } from '../home/auth.service';

const routes: Routes = [{ path: '', component: FriendListComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [FriendService, MessageService, AuthService],
})
export class FriendListModule {}
