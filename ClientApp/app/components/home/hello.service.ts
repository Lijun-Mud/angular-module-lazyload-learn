import { Injectable } from "@angular/core";
import {Observable,Subject} from "rxjs/RX"

@Injectable()
export  class HelloService {
    greet(name: string): Observable<string> {
        let result  = new Subject<string>();
        setTimeout(() => {
                let newName = name + Date.now();
                result.next(newName);
                result.complete();
            },
            100); 
        return result;
    }
}