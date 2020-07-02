import babel from 'rollup-plugin-babel';

 export default {
 input: 'src/OXgame.js',
 output: {
 file: 'out/OXgame.js',
 format: 'iife',
 sourcemap: 'true',
 },
 plugins: [
 babel({
 exclude: 'node_modules/**',
 'extensions': [ '.js', '.ts' ],
 })
 ],
 };
