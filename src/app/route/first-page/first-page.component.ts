import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SimBalanceReq, SimBalance } from 'src/app/model/balance';

@Component( {
	selector: 'app-first-page',
	templateUrl: './first-page.component.html',
	styleUrls: [ './first-page.component.scss' ]
} )
export class FirstPageComponent implements OnInit {

	simBalances: SimBalance[] = [];

	constructor( private balanceService: DataService ) {
	}

	ngOnInit() {

		const req: SimBalanceReq = new SimBalanceReq();
		req.id = 'AAAA';

		this.balanceService.getUserSimAndFlyBalances( req ).subscribe( ( data: SimBalance[] ) => {
			//debugger;
			this.simBalances = data;
		} );
	}



}