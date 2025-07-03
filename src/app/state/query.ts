import { DataChange, DataChangex } from './store';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';


@Injectable({providedIn:"root"})
export class QueryData extends Query<DataChange> {
    constructor(protected override store: DataChangex) {
        super(store)
    }


    updateName(value: string) {
        this.store.update({username: value})

    }
    selectUsername(): Observable<string> {
        return this.select(state => state.username);
    }

    selectIsDark(): Observable<boolean> {
        return this.select(state => state.isDark);
    }

    changeTheme() {
        console.log("Cmabiando tema")
        let currentTheme: boolean =  this.store.getValue().isDark
        this.store.update({isDark : !currentTheme })
        console.log(this.store.getValue().isDark)
    }
}



