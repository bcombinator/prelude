import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js',
  dest: 'dist/prelude.js',
  plugins: [ buble() ],
  format: 'umd',
  moduleName: 'bcombinatorPrelude'
};
