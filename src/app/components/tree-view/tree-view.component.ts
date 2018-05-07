import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { ItemStatus } from '../../model/item-status.model';

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
