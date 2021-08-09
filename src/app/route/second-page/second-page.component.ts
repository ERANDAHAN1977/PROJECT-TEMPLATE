import { Component, OnInit } from '@angular/core';
import { SimBalanceReq, SimBalance } from 'src/app/model/balance';
import { DataService } from 'src/app/services/data.service';

@Component( {
    selector : 'app-second-page',
    templateUrl : './second-page.component.html',
    styleUrls : [ './second-page.component.scss' ]
} )
export class SecondPageComponent implements OnInit
{

	isWaitForData = true;
	simBalances: SimBalance[] = [];

	constructor ( private balanceService: DataService )
	{
	}

	async ngOnInit ()
	{

	    const req: SimBalanceReq = new SimBalanceReq();
	    req.id = 'AAAA';

	    //debugger;

	    this.simBalances = await this.balanceService.getUserSimAndFlyBalances( req ).toPromise();
	    this.isWaitForData = false;
	}

}
