import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
listOfString : string[] =['mark','susan','john','maria']

searchText: string = ''

@ViewChild(ProductListComponent)
producListComponent :ProductListComponent

setSearchText(value: string){
  this.searchText = value;
}
}
