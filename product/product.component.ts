import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() Product : Array<IProduct>;
@Output() sendItem = new EventEmitter();
  constructor() {
    this.Product = []
  }

 selectedItem(){
   this.sendItem.emit(this.Product);
 }
  ngOnInit(): void {
    console.log(this.Product)
  }

}
