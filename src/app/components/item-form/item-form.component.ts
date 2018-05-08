import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemType } from '../../model/item-type.model';
import { ItemStatus } from '../../model/item-status.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Subscription } from 'rxjs/Subscription';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit , OnDestroy {

  public itemTypes: Array<string> = ItemType.getList();
  public itemStatuses: Array<string> = ItemStatus.getList();

  itemForm : FormGroup;
  itemSubscription : Subscription
  item : Item;

  constructor( private itemService : ItemsService ) { 

  }

  ngOnInit() {
    this.item = new Item();
    this.itemSubscription = this.itemService.itemSelected.subscribe( ( item ) => {
      this.item = item;
      this.initForm();
    } )
    this.initForm();
  }

  initForm() {
    
    this.itemForm =  new FormGroup( {
      'type' : new FormControl( this.item.TYPE ),
      'code' : new FormControl( this.item.ID ) ,
      'name' : new FormControl( this.item.NAME ) ,
      'description' : new FormControl( this.item.COMMENT ) ,
      'ip_address' : new FormControl( this.item.IP_address ),
      'status' : new FormControl( this.item.STATUS ),
    } );
    this.itemForm.disable();
  }

  onSubmit(){
    console.log( this.itemForm.value );
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

}
