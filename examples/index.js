/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var mgf = require( './../lib' );

var alpha;
var beta;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	t = randu() * 20.0;
	alpha = ( randu()*5.0 ) + EPS;
	beta = ( randu()*5.0 ) + EPS;
	v = mgf( t, alpha, beta );
	console.log( 't: %d, α: %d, β: %d, M_X(t;α,β): %d', t.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
}