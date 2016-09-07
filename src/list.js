import {curry, compose} from './func'

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

// map :: (a -> [b]) -> [a] -> [b]
export const map = curry((fn, xs) => xs.map(fn))

// chain :: (a -> b) -> [a] -> [b]
export const chain = curry((fn, xs) => [].concat.apply([], map(fn, xs)))

// filter :: (a -> Bool) -> [a] -> [a]
export const filter = curry((pred, xs) => xs.filter(pred))
