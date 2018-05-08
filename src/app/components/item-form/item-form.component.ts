import { Component, OnInit } from '@angular/core';
import { ItemType } from '../../model/item-type.model';
import { ItemStatus } from '../../model/item-status.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  public itemTypes: Array<string> = ItemType.getList();
  public itemStatuses: Array<string> = ItemStatus.getList();

  itemForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.itemForm =  new FormGroup( {
      'code' : new FormControl() ,
      'name' : new FormControl() ,
      'description' : new FormControl() ,
      'ip_address' : new FormControl() 
    } )
  }

}
