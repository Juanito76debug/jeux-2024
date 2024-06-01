import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class RealTimeService {

    getMessageCount(): Observable<number> {

        return new Observable(subscriber=>{
            setInterval(() => subscriber.next(Math.floor(Math.random()*100)), 1000);
        })

    }
getConnectedMembersCount(): Observable<number> {
    return new Observable(subscriber=>{
        setInterval(() => subscriber.next(Math.floor(Math.random()*50)), 1000);
    })
}
}