// curry :: ((a, b, c, ...) -> z) -> a -> b -> c -> ... -> z
export const curry = (fn, ...args) => args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args)

// _compose :: (b -> c) -> (a -> b) -> (a -> c)
const _compose = (f, g) => (...args) => f(g(...args))

// compose :: (a -> c) -> [(a -> a)] -> (a -> c)
export const compose = (...fns) => fns.reduce(_compose)

// of :: a -> [b]
export const of = Array.of.bind(Array)

// id :: a -> a
export const id = x => x
