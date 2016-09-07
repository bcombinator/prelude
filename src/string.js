import {curry} from './func'

// decode :: String -> String
export const decode = decodeURIComponent

// replace :: Regex -> String -> String -> String
export const replace = curry((pattern, substr, str) => str.replace(pattern, substr))

// toLower :: String -> String
export const toLower = str => str.toLowerCase()

// append :: String -> String -> String
export const append = curry((a, b) => b.concat(a))

// split :: String | RegExp → String → [String]
export const split = curry((separator, str) => str.split(separator))

// prepend :: String -> String -> String
export const prepend = curry((a, b) => a.concat(b))
