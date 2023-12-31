import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript';
// Use this if contains any css import
// import postcss from 'rollup-plugin-postcss'

import packageJSON from './package.json'
const input = './src/export.tsx'

export default [
    {
        input,
        output: [
            {
                file: packageJSON.main,
                format: 'cjs',
            },
            {
                file: packageJSON.module,
                format: 'es',
            },
        ],
        plugins: [
            typescript(),
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
            json(),
            resolve(),
            commonjs(),
        ],
    },
]
