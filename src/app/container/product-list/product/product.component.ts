import { Component, Input } from '@angular/core';
import {Product} from '../../../Models/Products';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product : Product;
  
}
