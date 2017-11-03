import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../alertTypes';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alertx',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponentX implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    //this.subject.asObservable().subscribe((alert) => console.log(alert.message))

    this.alertService.getAlerts().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);
    });

  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(a => a !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
