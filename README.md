# FeaturesSharedModulesRoutingLazyLoading

# Header for get ---> 'Content-Type'
# Header for post --->  'Content-Type', 'application/json' 

import { Http, RequestOptions, Headers } from '@angular/http';

`
    const headers = new Headers();

    headers.append( 'Content-Type', 'application/json' );

    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    
    headers.append('Access-Control-Allow-Methods', 'GET');
    
    headers.append('Access-Control-Allow-Origin', '*');
    
    let options = new RequestOptions( {headers: headers});
    
    this._http.get(this.url, options) `
