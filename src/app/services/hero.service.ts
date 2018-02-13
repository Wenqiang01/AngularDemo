import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class HeroService implements OnInit {
	loadedCB: any;
	private hURL = '';
	constructor(private http: Http) { }

	public getHeros(url): any {
		let hd = new Headers();
		hd.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: hd });
		return this.http.get(url, options)
			.map((res: Response) => res.json())
			.catch(this.errorHandler)
	}

	public postHeros(url, data): any {
		let hd = new Headers();
		hd.append('Content-Type', 'application/json');
		let options = new RequestOptions({ headers: hd });
		return this.http.post(url, data, options)
			.map((res: Response) => res.json())
			.catch(this.errorHandler)
	};

	private errorHandler(error: Response): any {
		console.log(error);
		return Observable.throw(error || 'server error');
	}

	ngOnInit() {
		console.log('ngOnInit');
		this.tryAndLoad();
	}

	tryAndLoad() {
		this.load().subscribe((res: any) => {
			this.loadedCB = res;
			if (this.loadedCB) {
				console.log('LoadCB', this.loadedCB);
				//  return Observable.of(this.loadedCB);
			}
		});
	}

	load() {
		let hd = new Headers();
		hd.append('Content-Type', 'application/json');
		//let authToken = localStorage.getItem('auth_token');
		//let myheaders = new Headers({ 'Accept': 'application/json' });
		//myheaders.append('Authorization', `Bearer ${authToken}`);
		let options = new RequestOptions({ headers: hd });
		return this.http.get('https://jsonplaceholder.typicode.com/posts', options)
			//return this.http.get('http://localhost:8081/', options)
			.map((res: Response) => {
				console.log('********', res);
				return res.json();
			})
	}

	
	

}
