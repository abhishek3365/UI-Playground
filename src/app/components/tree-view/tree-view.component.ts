import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { ItemStatus } from '../../model/item-status.model';
import { Item } from '../../model/item.model';
import { TreeItem } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit , OnDestroy{

    itemsSubscription : Subscription;
    
    public rootItems : Item[]= [];
    public items: Item[] ;

    constructor( private itemsService : ItemsService ) { 
        this.items = [];
        this.itemsSubscription =  itemsService.itemsChanged.subscribe( (items) => {
            this.items = items;
            this.rootItems = items.filter( item => !item.PARENT_ID );
        } );
    }

    ngOnInit() {
    }

    public hasChildren = ( item: Item ) =>  { 
        return this.items.filter( childItem => childItem.PARENT_ID === item.ID ).length > 0;
    }
   
    public fetchChildren = ( item: Item ) =>  { 
        item.children = this.items.filter( childItem => childItem.PARENT_ID === item.ID );
        return of(item.children);
    }

    onItemSelected( treeItem : TreeItem ){
        this.itemsService.itemSelected.next( treeItem.dataItem );
    }
    
    getColor( status : string ) {
        if( !status )
            return;
        
        switch(status){
            case ItemStatus.FROZEN : return "#000000";
            case ItemStatus.MALFUNCTION : return "#ffc000";
            case ItemStatus.WARNING : return "#c00000";
            case ItemStatus.MAINTENANCE : return "#5b9db5";
            case ItemStatus.OK : return "#92d050";
        }
    }

    getSrc( status : string ){
        switch(status){
            case ItemStatus.FROZEN : return "assets/frozen.png";
            case ItemStatus.MALFUNCTION : return "assets/malfunction.png";
            case ItemStatus.WARNING : return "assets/warning.png";
            case ItemStatus.MAINTENANCE : return "assets/maintenance.png";
            case ItemStatus.OK : return "assets/ok.png";
        }
    }

    ngOnDestroy() {
        this.itemsSubscription.unsubscribe();
    }

}
