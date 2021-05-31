import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { SimBalanceReq, SimBalance } from '../model/balance';

@Injectable( { providedIn: 'root' } )
export class DataService extends BaseService {

	private balances: SimBalance[] | undefined;

	constructor( protected http: HttpClient ) {
		super( http );
	}

	public getUserSimAndFlyBalances( req: SimBalanceReq ): Observable<SimBalance[]> {

		//debugger;
		let reply: Observable<SimBalance[]>;

		if ( this.balances )
		{
			reply = of( this.balances );
		}
		else
		{
			reply = this.http.get<SimBalance[]>( 'assets/data.json' ).pipe
				(
					tap( ( data: SimBalance[] ) => {
						this.balances = data;
					} ),
					delay( 3000 ),
					catchError( ( err: HttpErrorResponse ) => {
						return of( [] );
					} ),
				);
		}
		return reply;
	}

}
