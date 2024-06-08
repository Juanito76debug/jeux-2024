import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { RouterModule } from "@angular/router";
import { UserService } from "./user.service";
import { FriendService } from "../friend-list/friendService";



// import { MembresComponent } from "../membres/membres.component";


@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule],
    providers: [UserService, FriendService], 
    exports: [ProfileComponent]
    
})

export class userModule { }