import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { messageriesService } from "./messagerie.service";

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule],
    exports: [],
    providers: [messageriesService]
})

export class MessagerieModule { }