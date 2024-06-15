import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchService } from "./Search.Service";





@NgModule({

    declarations: [],
    imports: [CommonModule, RouterModule],
    
    providers: [SearchService]

})

export class UserSearchModule { }