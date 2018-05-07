import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { MapComponent } from './components/map/map.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SplitterModule } from '@progress/kendo-angular-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeViewComponent,
    ItemFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    SplitterModule,
    TreeViewModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [ ItemsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
