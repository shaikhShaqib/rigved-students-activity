import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {name: 'Laptop', price: 50000},
    {name: 'Gyser', price: 40000},
    {name: 'Mobile', price: 20000},
  ];

  @Output()
  data : EventEmitter<number> = new EventEmitter<number>();
  counter = 0;

  @Output()
  prices : EventEmitter<number> = new EventEmitter<number>();
  p : number = 0;

  add(price: number) : void {
    this.p += price;
    if(this.p >= 0) {
      this.prices.emit(this.p)
    } else {
      this.p = 0;
    }
    
    this.counter = this.counter + 1;
    if(this.counter >= 0) {
      this.data.emit(this.counter);
    } else {
      this.counter = 0;
    }
  }

  remove(price: number) : void {
    this.p -= price;
    if(this.p >= 0) {
      this.prices.emit(this.p)
    } else {
      this.p = 0;
    }
    
    this.counter = this.counter - 1;
    if(this.counter >= 0) {
      this.data.emit(this.counter);
    } else {
      this.counter = 0;
    }
  }
}
