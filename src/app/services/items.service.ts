import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Item } from "../model/item.model";

@Injectable()
export class ItemsService{
    
    items ;
    itemsChanged = new Subject<Item[]>();
    itemSelected = new Subject<Item>();

    constructor(private http: HttpClient){
        this.setItems();
    }

    setItems() {
        var url = 'http://localhost:3000/api/items';
        this.http.get<Item[]>( 'assets/items.json'  )
        .subscribe( (data) => {
          this.items = data;
          this.itemsChanged.next( this.items.slice() );
        }, (err) => {
            console.log(err);
        });
    }

}