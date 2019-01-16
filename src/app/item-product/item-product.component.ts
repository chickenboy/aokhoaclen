import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  @Input()  productStatus : string;
  @Input()  urlProduct : string;
  @Input()  urlImageProduct : string;
  @Input()  price : number;
  @Input()  productName : string;

  actualIcon: string;
  constructor() { }

  ngOnInit() {
    if(this.productStatus == 'new'){
      this.actualIcon = 'http://aokhoaclen.com/wp-content/themes/shopwoovn/images/new_status.png';
    }
  }

}
