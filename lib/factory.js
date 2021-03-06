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

// MODULES //

var constantFunction = require( '@stdlib/utils-constant-function' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var mgf0 = require( './_mgf.js' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 0.5, 0.5 );
*
* var y = mgf( 0.8 );
* // returns ~1.552
*
* y = mgf( 0.3 );
* // returns ~1.168
*/
function factory( alpha, beta ) {
	if (
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a beta distribution.
	*
	* @private
	* @param {number} t - input value
	* @returns {number} evaluated MGF
	*
	* @example
	* var y = mgf( 2.0 );
	* // returns <number>
	*/
	function mgf( t ) {
		if ( isnan( t ) ) {
			return NaN;
		}
		return mgf0( t, alpha, beta );
	}
}


// EXPORTS //

module.exports = factory;
