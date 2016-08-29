
// curry :: ((a, b, c, ...) -> z) -> a -> b -> c -> ... -> z
export const curry = (fn, ...args) => args.length === fn.length ? fn(...args) : curry.bind(null, fn, ...args)

// decode :: String -> String
export const decode = decodeURIComponent

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
export const _compose = (f, g) => (...args) => f(g(...args))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
export const compose = (...fns) => fns.reduce(_compose)

// replace :: Regex -> String -> String -> String
export const replace = (pattern, substr) => str => str.replace(pattern, substr)

// toLower :: String -> String
export const toLower = str => str.toLowerCase()

// append :: String -> String -> String
export const append = a => b => b.concat(a)

// contains ::  Eq a => a -> [a] -> Bool
export const contains = curry((x, xs) => xs.indexof(x) >= 0)

// uniq :: Eq a => [a] -> [a]
export const uniq = xs => xs.reduce((list, x) => !contains(x, list) ? list.concat(x) : list, [])

// concat :: [a] -> [a] -> [a]
export const concat = curry((xs, list) => xs.concat(list))

// union :: Eq a => [a] -> [a] -> [a]
export const union = compose(uniq, concat)

// join :: String -> [a] -> String
export const join = separator => xs => xs.join(separator)

// split :: String | RegExp → String → [String]
export const split = separator => str => str.split(separator)

// chain :: (a -> [b]) -> [a] -> [b]
export const chain = curry((fn, xs) => [].concat(...xs.map(fn)))

// of :: a -> [b]
export const of = Array.of.bind(Array)

// filter :: (a -> Bool) -> [a] -> [a]
export const filter = pred => xs => xs.filter(pred)

// prepend :: String -> String -> String
export const prepend = a => b => a.concat(b)

// id :: a -> a
export const id = x => x
