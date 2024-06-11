import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FriendListComponent } from "./friend-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [FriendListComponent],
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
    exports: [FriendListComponent]
})

export class FriendListModule { }