import test from 'tape'
import * as P from './index'

test('curry', function (t) {
  const f = P.curry((x, y) => x + y)
  const g = P.curry((a, b, c) => [a, b, c])
  const xs = [1, 2, 3]

  t.equals(f(2)(4), 6)
  t.equals(f(2, 4), 6)
  t.deepEqual(g(1)(2)(3), xs)
  t.deepEqual(g(1, 2)(3), xs)
  t.deepEqual(g(1)(2, 3), xs)
  t.deepEqual(g(1, 2, 3), xs)
  t.end()
})

test('decode', function (t) {
  const str = 'hello there'
  const encodedStr = encodeURIComponent(str)

  t.equals(P.decode(encodedStr), str, 'should decode string')
  t.end()
})

test('compose', function (t) {
  t.equals(P.compose(x => x + 1, y => y + 2)(10), 13, 'composes with two functions')
  t.equals(P.compose(x => x * x, y => y + 1, a => a)(10), 121, 'composes with more than two functions')
  t.equals(P.compose(z => z.reduce((acc, v) => acc + v, 0), y => y.map(a => a + 1), x => x.filter(Boolean))([1, 2, 3, null, undefined]), 9, 'compose an array')
  t.end()
})

test('replace', function (t) {
  t.equals(P.replace(/\-/, '--', 'hello-there'), 'hello--there', 'replace with regex pattern')
  t.equals(P.replace('-', '--', 'hello-there'), 'hello--there', 'replace with string pattern')
  t.end()
})

test('toLower', function (t) {
  t.equals(P.toLower('HELLO THERE'), 'hello there', 'converts string to lowercase')
  t.end()
})

test('append', function (t) {
  t.equals(P.append('!', 'hello world'), 'hello world!', 'appends string to another one')
  t.end()
})

test('contains', function (t) {
  t.equals(P.contains(1, [1, 2, 3]), true, 'checks if a value exists within a list and returns a boolean')
  t.equals(P.contains(5, [1, 2, 3]), false, 'checks if a value exists within a list and returns a boolean')
  t.end()
})

test('uniq', function (t) {
  t.deepEqual(P.uniq([1, 2, 3, 3, 4, 5, 1]), [1, 2, 3, 4, 5], 'removes duplicates from a list')
  t.end()
})

test('concat', function (t) {
  t.deepEqual(P.concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6], 'concatenates two lists together')
  t.end()
})

test('union', function (t) {
  t.deepEqual(P.union([1, 2, 3], [4, 5, 6, 1, 2, 3]), [1, 2, 3, 4, 5, 6], 'create a union from two lists')
  t.end()
})

test('join', function (t) {
  t.equals(P.join('-', ['hello', 'world']), 'hello-world', 'joins values in a list to produce a string')
  t.end()
})

test('split', function (t) {
  t.deepEqual(P.split(/\-/, 'hello-there'), ['hello', 'there'], 'split with regex pattern')
  t.deepEqual(P.split('-', 'hello-there'), ['hello', 'there'], 'split with string pattern')
  t.end()
})

test('chain', function (t) {
  t.deepEqual(P.chain(x => [x, x], [1, 2, 3]), [1, 1, 2, 2, 3, 3], 'create duplicates values within a list')
  t.deepEqual(P.chain(x => x, [1, [2], [3]]), [1, 2, 3], 'flattens list')
  t.end()
})

test('of', function (t) {
  t.deepEqual(P.of(1), [1], 'sticks a value into a list')
  t.end()
})

test('filter', function (t) {
  t.deepEqual(P.filter(P.id, [null, 1, undefined, 2, 3]), [1, 2, 3], 'filters list by provided function')
  t.end()
})

test('prepend', function (t) {
  t.equals(P.prepend('!', 'hello'), '!hello', 'prepends a string value to another string')
  t.end()
})

test('id', function (t) {
  t.equals(P.id('hello'), 'hello', 'returns the parameter provided')
  t.end()
})
