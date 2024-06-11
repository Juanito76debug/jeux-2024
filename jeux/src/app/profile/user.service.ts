import { Injectable } from "@angular/core";
import { UserProfile } from "./profile.component";


@Injectable({
  providedIn: "root",
})

export class UserService {
    private users : UserProfile[] = [
        {
            pseudonyme : "admin",
            nom : "admin",
            prenom : "admin",
            email : "admin",
            genres : "admin",
            photos : "admin",
            dateNaissance : "admin",
            presentation : "admin",
            preferences : "admin",
            userType : "admin"
        },
        {
            pseudonyme : "member",
            nom : "member",
            prenom : "member",
            email : "member",
            genres : "member",
            photos : "member",
            dateNaissance : "member",
            presentation : "member",
            preferences : "member",
            userType : "member"
        },

        {
            pseudonyme : "visitor",
            nom : "visitor",
            prenom : "visitor",
            email : "visitor",
            genres : "visitor",
            photos : "visitor",
            dateNaissance : "visitor",
            presentation : "visitor",
            preferences : "visitor",
            userType : "visitor"
        },
    ];
    constructor() {}
    getUserProfile(pseudonyme: string) : UserProfile | undefined {
        const user = this.users.find(u=>u.pseudonyme === pseudonyme);
        return user;

}

updateUserProfile(pseudonyme: string, updateProfile: UserProfile) : void {
    const userIndex = this.users.findIndex(u => u.pseudonyme === pseudonyme);
    if (userIndex !== -1) {
        this.users[userIndex] = updateProfile;
    }

}

deleteUserProfile(pseudonyme: string) : void {
    this.users = this.users.filter(u=>u.pseudonyme !== pseudonyme);

}

}