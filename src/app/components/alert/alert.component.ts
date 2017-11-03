import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { fadeInOut } from './alert.animate';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css'],
	animations: [fadeInOut]
})
export class AlertComponent implements OnInit {

	public alerts: Array<IAlert> = [];
	public alertx: IAlert[] = [];

	public backup: Array<IAlert> = [];
	public backupx: IAlert[] = [];

	public _success = new Subject<string>();
	staticAlertClosed: boolean = false;
	successMessage: string;

	constructor() { }

	ngOnInit() {

		setTimeout(() => this.staticAlertClosed = true, 2000);

		this._success.subscribe((msg) => this.successMessage = msg);
		debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);

		this.alerts.push({
			id: 1,
			type: 'success',
			message: 'This is an success alert',
			state: 'in'
		}, {
				id: 2,
				type: 'info',
				message: 'This is an info alert',
				state: 'in'
			}, {
				id: 3,
				type: 'warning',
				message: 'This is a warning alert',
				state: 'in'
			}, {
				id: 4,
				type: 'danger',
				message: 'This is a danger alert',
				state: 'in'
			}, {
				id: 5,
				type: 'primary',
				message: 'This is a primary alert',
				state: 'in'
			}, {
				id: 6,
				type: 'secondary',
				message: 'This is a secondary alert',
				state: 'in'
			}, {
				id: 7,
				type: 'light',
				message: 'This is a light alert',
				state: 'in'
			}, {
				id: 8,
				type: 'dark',
				message: 'This is a dark alert',
				state: 'in'
			})

		this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
		console.log('backup', this.backup);

		//Below code is used to test IAlert[]	
		this.alertx.push({
			id: 8,
			type: 'dark',
			message: 'This is a dark alert',
			state: 'in'
		});
		this.alertx.push({
			id: 1,
			type: 'success',
			message: 'This is an success alert',
			state: 'in'
		})
		this.backupx = Object.assign({}, this.alertx);
		console.log('backupx: ', this.backupx);

	}

	ngAfterViewInit() {
		console.log('after view init')
		this.updateAlertsState();
	}

	updateAlertsState() {
		let that = this;
		for (let i = 0; i < this.alertx.length; i++) {
			setTimeout(function(){
				console.log('i', i);
				that.alertx[i].state = 'out'
			}, 100 * i);
		}
	}

	closeAlert(alert) {
		let that = this;
		for (let i = 0; i < this.alerts.length; i++) {
			if (this.alerts[i].id === alert.id) {
				this.alerts[i].state = 'in';
				setTimeout(() => {
					that.alerts.splice(i, 1);
				}, 500)

			}
		}
		for (let i = 0; i < this.alertx.length; i++) {
			if (this.alertx[i].id === alert.id) {
				this.alertx[i].state = 'in';
				setTimeout(() => {
					that.alertx.splice(i, 1);
				}, 500)
			}
		}
	}

	resetAlerts() {
		this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
		this.alertx = this.backup.map((alert: IAlert) => Object.assign({}, alert));

		this.updateAlertsState();
	}

	public changeSuccessMessage() {
		this._success.next(`${new Date()} - Message successfully changed.`);
	}
}

export interface IAlert {
	id: number,
	type: string,
	message: string,
	state: string

}

