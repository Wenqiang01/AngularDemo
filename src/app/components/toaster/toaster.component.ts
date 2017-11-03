import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
  providers: [AlertService]
})
export class ToasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
