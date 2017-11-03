import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { APIURLs } from '../../services/constantInfo';


@Component({
	selector: 'app-heros',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.css'],
	providers: [APIURLs]
})
export class HerosComponent implements OnInit {
	heros: Hero[] = [];
	respTitle: string = '';
	respBody: string = '';
	respID: number = 0;
	newHero: String = '';
	modalRef: any = null;

	@ViewChild("respDialog") respDialog;
	@ViewChild("updateDialog") updateDialog;

	constructor(
		private heroService: HeroService,
		private apiUrls: APIURLs,
		private modalSerivce: NgbModal,
		private ref: ElementRef
	) { }

	ngOnInit() {
		this.getHeros();
		console.log(this.ref.nativeElement);
		//this.respDialog = this.ref.nativeElement.respDialog;
	}

	ngAfterViewInit() {
		console.log('onAfterViewInit', this.respDialog);
		console.log(this.updateDialog);
	}

	getHeros() {

		// this.heroService.getHeros().then((res) => {
		// 	console.log('heros', res);
		// 	this.heros = res
		// });
		this.heroService.getHeros(this.apiUrls.herosUrl).subscribe((res) => {
			//console.log('Hero Json:' + res);
			this.heros = res
		});
		//this.heroService.tryAndLoad();
	}

	showUpdate(h: Hero) {
		this.respTitle = 'Update Hero';
		this.newHero = h.name;

		this.respID = h.id;
		this.modalRef = this.modalSerivce.open(this.updateDialog)
	}

	updateHero(id: number) {
		let hero = {
			action: 'update',
			data: {
				id: id,
				name: this.newHero
			}
		}
		this.heroService.postHeros(this.apiUrls.herosUrl, hero).subscribe((res)=>{
			if (res.msg == "succ") {
				this.getHeros();
			}
		});
		this.modalRef.close();
		//this.modalRef.dismiss();
	}

	deleteHero(id: number) {
		let hero = {
			action: 'del',
			data: { "id": id }
		}
		this.heroService.postHeros(this.apiUrls.herosUrl, hero).subscribe((res) => {
			console.log('Hero Json:' + res);
			if (res.msg == "succ") {
				this.getHeros();
			}
		});
		return true;
	}

	postHeros() {
		let hero = {
			action: 'add',
			data: { "name": 'Vincent' }
		}
		this.heroService.postHeros(this.apiUrls.herosUrl, hero).subscribe((res) => {
			console.log('Hero Json:' + res);
			if (res.msg == "succ") {
				this.openMsgDialog("Add Successful", `Hero "${hero.data.name}" is added`);
				this.getHeros();
			}
		});
	}

	openMsgDialog(title, body) {
		this.respTitle = title;
		this.respBody = body;

		this.modalSerivce.open(this.respDialog);
	}
}
