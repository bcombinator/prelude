// curry :: ((a, b, c, ...) -> z) -> a -> b -> c -> ... -> z
export const curry = (fn, ...args) => args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args)

// decode :: String -> String
export const decode = decodeURIComponent

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
const _compose = (f, g) => (...args) => f(g(...args))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
export const compose = (...fns) => fns.reduce(_compose)

// replace :: Regex -> String -> String -> String
export const replace = curry((pattern, substr, str) => str.replace(pattern, substr))

// toLower :: String -> String
export const toLower = str => str.toLowerCase()

// append :: String -> String -> String
export const append = curry((a, b) => b.concat(a))

// contains ::  Eq a => a -> [a] -> Bool
export const contains = curry((x, xs) => xs.indexOf(x) >= 0)

// uniq :: Eq a => [a] -> [a]
export const uniq = curry(xs => xs.reduce((list, x) => !contains(x, list) ? list.concat(x) : list, []))

// concat :: [a] -> [a] -> [a]
export const concat = (xs, list) => xs.concat(list)

// union :: Eq a => [a] -> [a] -> [a]
export const union = compose(uniq, concat)

// join :: String -> [a] -> String
export const join = curry((separator, xs) => xs.join(separator))

// split :: String | RegExp → String → [String]
export const split = curry((separator, str) => str.split(separator))

// map :: (a -> [b]) -> [a] -> [b]
export const map = curry((fn, xs) => xs.map(fn))

// chain :: (a -> b) -> [a] -> [b]
export const chain = curry((fn, xs) => [].concat.apply([], map(fn, xs)))

// of :: a -> [b]
export const of = Array.of.bind(Array)

// filter :: (a -> Bool) -> [a] -> [a]
export const filter = curry((pred, xs) => xs.filter(pred))

// prepend :: String -> String -> String
export const prepend = curry((a, b) => a.concat(b))

// id :: a -> a
export const id = x => x
