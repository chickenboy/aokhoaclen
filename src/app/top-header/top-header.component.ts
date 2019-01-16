import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  // @Input() data : ItemTopHeader[];
  dataHeader : ItemTopHeader[]=[
    {
      itemName :'GIAO HÀNG TOÀN QUỐC',
      itemIcon : 'fa-truck'
    },
    {
      itemName :'THANH TOÁN TẠI NHÀ',
      itemIcon : 'fa-money'
    },
    {
      itemName :'CHẤT LƯỢNG LOẠI 1',
      itemIcon : 'fa-cog'
    },
    {
      itemName :'ĐỔI TRÀ HÀNG MIỄN PHÍ',
      itemIcon : 'fa-refresh'},
  ];
  constructor() { }

  ngOnInit() {
  }
}
export interface ItemTopHeader {
  itemName : String;
  itemIcon : String;
}
