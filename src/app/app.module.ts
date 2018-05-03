import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { MapComponent } from './components/map/map.component';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
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
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
