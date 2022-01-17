

import { Product } from 'src/product';

import { products } from './../../data/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  product!: Product;
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get("productId"));
    this.product = products.find(product=> product.id === id) as Product;
  }

}
