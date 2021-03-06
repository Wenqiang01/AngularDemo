import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-homex',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }


  success(message: string) {
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }
}


