import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit , OnDestroy{

    itemsSubscription : Subscription;
    
    public rootItems : any[] = [];
    public items: any[] ;

    constructor( private itemsService : ItemsService ) { 
        this.items = [];
        this.itemsSubscription =  itemsService.itemsChanged.subscribe( (items) => {
            this.items = items;
            console.log( this.items );
            this.rootItems = items.filter( item => !item["PARENT ID"] );
        } );
    }

    ngOnInit() {
    }

    public hasChildren = ( item: any ) =>  { 
        return this.items.filter( childItem => childItem["PARENT ID"] === item["ID"] ).length > 0;
    }
   
    public fetchChildren = (item: any) =>  { 
        item.children = this.items.filter( childItem => childItem["PARENT ID"] === item["ID"] );
        return of(item.children);
    }
    
    ngOnDestroy() {
        this.itemsSubscription.unsubscribe();
    }

}
