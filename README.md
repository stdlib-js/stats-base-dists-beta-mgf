<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Beta][beta-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_beta_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}" alt="Moment-generating function (MGF) for a beta distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = 1 +\sum_{k=1}^{\infty} \left( \prod_{r=0}^{k-1} \frac{\alpha+r}{\alpha+\beta+r} \right) \frac{t^k}{k!}" data-equation="eq:beta_beta_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/beta/mgf/docs/img/equation_beta_beta_mgf.svg" alt="Moment-generating function (MGF) for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-mgf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-mgf@deno/mod.js';
```

#### mgf( t, alpha, beta )

Evaluates the [moment-generating function][mgf] (MGF) for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = mgf( 0.5, 1.0, 1.0 );
// returns ~1.297

y = mgf( 0.5, 2.0, 4.0 );
// returns ~1.186

y = mgf( 3.0, 2.0, 2.0 );
// returns ~5.575

y = mgf( -0.8, 4.0, 4.0 );
// returns ~0.676
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -1.0, 0.5 );
// returns NaN

y = mgf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, 0.5, -1.0 );
// returns NaN

y = mgf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### mgf.factory( alpha, beta )

Returns a function for evaluating the [moment-generating function][mgf] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mymgf = mgf.factory( 0.5, 0.5 );

var y = mymgf( 0.8 );
// returns ~1.552

y = mymgf( 0.3 );
// returns ~1.168
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-mgf@deno/mod.js';

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-beta-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-beta-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-beta-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-beta-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-beta-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-beta-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-beta-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-beta-mgf/main/LICENSE

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
