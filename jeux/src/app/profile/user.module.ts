import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { UserService } from "./user.service";
import { FriendService } from "../friend-list/friendService";
import { FormsModule } from "@angular/forms";

import { MessageService } from "../message-post/message.service";
import { AuthService } from "../home/auth.service";




// import { MembresComponent } from "../membres/membres.component";


@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, FormsModule],
    providers: [UserService, FriendService, MessageService, AuthService], 
    exports: []
    
})

export class userModule { }