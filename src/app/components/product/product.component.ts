import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { FadeIn, FadeOut } from './fade-in';
import { Product } from './productClass';
import { StaffService } from './staff.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  animations: [FadeIn, FadeOut],
  styleUrls: ['./product.component.css'],
  host: { ['@FadeIn']: '' }
})
export class ProductComponent implements OnInit, OnDestroy {
  public animateState: string = 'current';
  public products: Product[] = [];
  private subScription: Subscription;

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.subScription = this.staffService.getProdcuts().subscribe(prod => {
      if (prod.action === 'add') {
        prod.state = 'stay';
        this.products.push(prod);
      } else {
        console.log('edit', prod);
        this.updateProduct(prod);
      }
    });


    for (let i = 0; i < 4; i++) {
      let prod = new Product(i, 'Product' + i, 100, 'add');
      prod.state = 'stay';
      this.products.push(prod);
    }

  }

  editProduct(prod: Product) {
    prod.action = 'update'
    //this.router.navigate(['/edit', JSON.stringify(prod)]);
    this.router.navigate(['Product/add', { prod: JSON.stringify(prod) }]);
  }

  deleteProduct(id: number) {
    this.animateState = 'leave';
    for (let i = 0; i < this.products.length; i++) {
      if (id === this.products[i].id) {
        this.products[i].state = 'leave';
        //setTimeout(this.products.splice(i, 1), 5000);
        let that = this;
        setTimeout(function () {
          that.products.splice(i, 1)
        }, 500);
        break;
      }
    }
  }

  updateProduct(prod: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (prod.id === this.products[i].id) {
        prod.state = 'stay';
        this.products[i] = prod;
        break;
      }
    }
  }

  ngOnDestroy() {
    this.subScription.unsubscribe();
  }
}





