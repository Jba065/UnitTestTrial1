import { Product } from 'src/product';


import { Component, OnInit, NgModule } from '@angular/core';
import { products } from 'src/data/products';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  title:string = "Sebrazzzz"
  isUnchanged:boolean = true;
  //products:products[]= products;
  products:Product[]=products;
  constructor() { }

  ngOnInit(): void {
  }

  clickMe(product:Product){
    window.alert(product.name+" Course Video is available for purchase!");
  }
  enableBuying(){
      this.isUnchanged = !this.isUnchanged;
  }
}
