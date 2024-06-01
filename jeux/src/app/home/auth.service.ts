import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export enum UserRole{

Visitor = "visitor",
Member = "member",
admin = "admin",
}

@Injectable({
    providedIn: 'root'
})

export class AuthService{


    private currentUserRole = new BehaviorSubject<UserRole>(UserRole.Visitor);

    setUserRole(role: UserRole): void {
        this.currentUserRole.next(role);
    }

    getUserRole(): Observable<UserRole> {
        return this.currentUserRole.asObservable();
    }

}
