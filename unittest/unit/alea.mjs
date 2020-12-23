import * as assert from 'uvu/assert'
import {test_prng_alg} from './_common.mjs'

import { prng_alea } from 'esm-seedrandom'
import { prng_alea as prng_alea_isolated } from 'esm-seedrandom/esm/alea.mjs'
import { prng_alea as prng_alea_minify } from 'esm-seedrandom/esm/alea.min.mjs'

const cjs_prng_alea = require('seedrandom/lib/alea.js')

describe('alea', () => {
  let _ans_shared = [ 0.2594452982302755, 0.8253263409715146, 0.42280301195569336 ]
  const snap = {
    seed: 'an example seed string',
    direct: _ans_shared,
    quick: _ans_shared,
    int32: [ 1114309071, -750217653, 1815925109 ],
    double: [ 0.2594452984224367, 0.4228030121662897, 0.7626296668940982 ],
  }

  describe('shared', () =>
    test_prng_alg('alea', prng_alea, snap))

  describe('isolated', () =>
    test_prng_alg('alea', prng_alea_isolated, snap))

  describe('isolated minified', () =>
    test_prng_alg('alea', prng_alea_minify, snap))

  if (cjs_prng_alea)
    describe('original seedrandom (CommonJS)', () =>
      test_prng_alg('alea', cjs_prng_alea, snap))
})
