import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {path: '', children: [{path:'', redirectTo: 'membres', pathMatch: 'full'},
        {path: 'profil', loadChildren: ()=> import ('./profile/user.module').then(m=>m.userModule)},
        {path: 'amis', loadChildren: ()=> import ('./friend-list/friend-list.module').then(m=>m.FriendListModule)},
        {path:'member', loadChildren: ()=> import ('./user-search/user-search.module').then(m=>m.UserSearchModule)},
       


]

    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersonnesModule {}