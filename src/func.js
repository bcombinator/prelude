// curry :: ((a, b, c, ...) -> z) -> a -> b -> c -> ... -> z
export const curry = (fn, ...args) => args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args)

// compose2 :: (b -> c) -> (a -> b) -> a -> c
const compose2 = (f, g) => x => f(g(x))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
export const compose = (...fns) => fns.reduce(compose2)

// of :: a -> [b]
export const of = Array.of.bind(Array)

// id :: a -> a
export const id = x => x
