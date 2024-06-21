import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchService } from "./Search.Service";
import { UserSearchComponent } from "./user-search.component";

const routes: Routes = [
    {path: '', component: UserSearchComponent}];





@NgModule({

    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    
    providers: [SearchService]

})

export class UserSearchModule { }