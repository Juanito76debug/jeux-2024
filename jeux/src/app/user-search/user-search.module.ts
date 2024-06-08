import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchService } from "./Search.Service";
import { UserSearchComponent } from "./user-search.component";


@NgModule({

    declarations: [UserSearchComponent],
    imports: [CommonModule, RouterModule],
    
    providers: [SearchService]

})

export class UserSearchModule { }