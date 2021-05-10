import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

export class BaseService {
	constructor( protected http: HttpClient ) {


	}

	handleError( error: HttpErrorResponse ) {
		return of( 'ERROR' );
	}

}
