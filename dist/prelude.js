(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.bcombinatorPrelude = global.bcombinatorPrelude || {})));
}(this, function (exports) { 'use strict';

	// curry :: ((a, b, c, ...) -> z) -> a -> b -> c -> ... -> z
	var curry = function (fn) {
		var args = [], len = arguments.length - 1;
		while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

		return args.length >= fn.length ? fn.apply(void 0, args) : curry.bind.apply(curry, [ null, fn ].concat( args ));
	}

	// _compose :: (b -> c) -> (a -> b) -> (a -> c)
	var _compose = function (f, g) { return function () {
		var args = [], len = arguments.length;
		while ( len-- ) args[ len ] = arguments[ len ];

		return f(g.apply(void 0, args));
	; }	}

	// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
	var compose = function () {
		var fns = [], len = arguments.length;
		while ( len-- ) fns[ len ] = arguments[ len ];

		return fns.reduce(_compose);
	}

	// of :: a -> [b]
	var of = Array.of.bind(Array)

	// id :: a -> a
	var id = function (x) { return x; }

	// contains ::  Eq a => a -> [a] -> Bool
	var contains = curry(function (x, xs) { return xs.indexOf(x) >= 0; })

	// uniq :: Eq a => [a] -> [a]
	var uniq = curry(function (xs) { return xs.reduce(function (list, x) { return !contains(x, list) ? list.concat(x) : list; }, []); })

	// concat :: [a] -> [a] -> [a]
	var concat = function (xs, list) { return xs.concat(list); }

	// union :: Eq a => [a] -> [a] -> [a]
	var union = compose(uniq, concat)

	// join :: String -> [a] -> String
	var join = curry(function (separator, xs) { return xs.join(separator); })

	// map :: (a -> [b]) -> [a] -> [b]
	var map = curry(function (fn, xs) { return xs.map(fn); })

	// chain :: (a -> b) -> [a] -> [b]
	var chain = curry(function (fn, xs) { return [].concat.apply([], map(fn, xs)); })

	// filter :: (a -> Bool) -> [a] -> [a]
	var filter = curry(function (pred, xs) { return xs.filter(pred); })

	// decode :: String -> String
	var decode = decodeURIComponent

	// replace :: Regex -> String -> String -> String
	var replace = curry(function (pattern, substr, str) { return str.replace(pattern, substr); })

	// toLower :: String -> String
	var toLower = function (str) { return str.toLowerCase(); }

	// append :: String -> String -> String
	var append = curry(function (a, b) { return b.concat(a); })

	// split :: String | RegExp → String → [String]
	var split = curry(function (separator, str) { return str.split(separator); })

	// prepend :: String -> String -> String
	var prepend = curry(function (a, b) { return a.concat(b); })

	exports.curry = curry;
	exports.compose = compose;
	exports.of = of;
	exports.id = id;
	exports.contains = contains;
	exports.uniq = uniq;
	exports.concat = concat;
	exports.union = union;
	exports.join = join;
	exports.map = map;
	exports.chain = chain;
	exports.filter = filter;
	exports.decode = decode;
	exports.replace = replace;
	exports.toLower = toLower;
	exports.append = append;
	exports.split = split;
	exports.prepend = prepend;

	Object.defineProperty(exports, '__esModule', { value: true });

}));