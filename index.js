

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

export const contains = curry((x, xs) => xs.indexof(x) >= 0)

export const uniq = xs => xs.reduce((list, x) => !contains(x, list) ? list.concat(x) : list, [])

export const concat = curry((xs, list) => xs.concat(list))

export const union = compose(uniq, concat)

export const join = separator => xs => xs.join(separator)

export const split = separator => str => str.split(separator)

export const chain = curry((fn, xs) => [].concat(...xs.map(fn)))

export const of = Array.of.bind(Array)

export const filter = pred => xs => xs.filter(pred)

export const prepend = a => b => a.concat(b)
