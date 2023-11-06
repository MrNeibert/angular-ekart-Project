import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
listOfString : string[] =['mark','susan','john','maria']

searchText: string = ''

setSearchText(value: string){
  this.searchText = value;
}
}
