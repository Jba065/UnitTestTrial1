import { Product } from 'src/product';


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {


  @Input() product!: Product;

  @Input() isUnchanged:Boolean | undefined;
  @Output() notify = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  clickChildMe(){
    this.notify.emit(this.product);
  }
}
