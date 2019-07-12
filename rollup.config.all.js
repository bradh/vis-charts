import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';
import banner from 'rollup-plugin-banner';
import genHeader from './lib/header';

export default [{
	input: 'index.js',
	output: {
		file: 'dist/vis.js',
		name: 'vis',
		exports: 'default',
		format: 'umd'
	},
	plugins: [
		commonjs(),
		nodeBuiltins(),
		nodeResolve(),
		babel(),
		banner(genHeader())
	]
}]
