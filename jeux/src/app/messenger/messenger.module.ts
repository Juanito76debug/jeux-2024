import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessengerService } from "./messenger.service";
import { FormsModule } from "@angular/forms";



@NgModule({

    declarations: [],
    imports: [CommonModule, FormsModule],
    exports: [],
    providers: [MessengerService]

})

export class MessengerModule { }