import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { slideInOutAnimation } from '../slide-in-out';
import { Product } from '../productClass';
import { StaffService } from '../staff.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class AddEditComponent implements OnInit {
  private action: string = 'add';
  product: any = {};

  constructor(private staffService: StaffService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product.name = '';
    //console.log(this.activatedRoute.snapshot.params['prod'])
    if (this.activatedRoute.snapshot.params['prod']) {
      this.product = JSON.parse(this.activatedRoute.snapshot.params['prod']);
      this.action = 'update';
    } else {
      this.action = 'add';
    }
  }

  saveProduct() {
    if (this.action === 'add') {
      this.staffService.AddProducts(this.product.name, this.product.price);
      this.router.navigate(['Product']);
    } else {
      this.staffService.updateProducts(this.product.id, this.product.name, this.product.price);
      this.router.navigate(['Product']);
    }
  }
}
