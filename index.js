// decode :: String -> String
const decode = decodeURIComponent

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
const _compose = (f, g) => (...args) => f(g(...args))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
const compose = (...fns) => fns.reduce(_compose)

// replace :: Regex -> String -> String -> String
const replace = (pattern, substr) => str => str.replace(pattern, substr)

// toLower :: String -> String
const toLower = str => str.toLowerCase()

// append :: String -> String -> String
const append = a => b => b.concat(a)

const uniq = xs => xs.reduce((list, x) => list.indexOf(x) === -1 ? list.concat(x) : list, [])

const concat = (xs, list) => xs.concat(list)

const union = compose(uniq, concat)

const join = separator => xs => xs.join(separator)

const split = separator => str => str.split(separator)

const chain = fn => xs => [].concat.apply([], xs.map(fn))

const of = Array.of.bind(Array)

const filter = pred => xs => xs.filter(pred)

const prepend = a => b => a.concat(b)

export { decode, compose, replace, toLower, append, uniq, concat, union, join, split, chain, of, filter, prepend }
