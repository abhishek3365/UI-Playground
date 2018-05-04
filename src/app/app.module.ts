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
    BrowserModule,
    ButtonsModule,
    SplitterModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
