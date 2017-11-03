import { Injectable, OnInit } from '@angular/core';
import { Product } from './productClass';
import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';


@Injectable()
export class StaffService implements OnInit {
  private subject = new Subject<Product>();


  constructor() { }

  ngOnInit() {}

  getProdcuts() {
    return this.subject.asObservable();
  }

  AddProducts(productName, price) {
    this.subject.next(new Product(Math.floor(Math.random() * 2000), productName, price, 'add'));
  }

  updateProducts(id, productName, price) {
    this.subject.next(new Product(id, productName, price, 'update'));
  }
}
