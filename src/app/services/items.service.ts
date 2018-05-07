import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ItemsService{
    
    items ;
    itemsChanged = new Subject<any>();

    constructor(private http: HttpClient){
        this.setItems();
    }

    setItems() {
        this.http.get<any>(  'http://localhost:3000/api/items' )
        .subscribe((data) => {
          this.items = data;
          this.itemsChanged.next( this.items );
        }, (err) => {
            console.log(err);
        });
    }

}