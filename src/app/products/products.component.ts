import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  products: { id: number; name: string; price: number; source: string }[] = [
    { id: 1, name: 'MacBook Pro 16', source: '/assets/mac.jpg', price: 3000 },
    { id: 2, name: 'MacBook Pro 15', source: '/assets/mac.jpg', price: 900 },
    { id: 3, name: 'MacBook Pro 13', source: '/assets/mac.jpg', price: 1500 },
    { id: 4, name: 'MacBook Pro 14', source: '/assets/mac.jpg', price: 2000 },
  ];
}
