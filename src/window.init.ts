import Vue from 'vue'
// tslint:disable-next-line:no-var-requires
const BN = require('bignumber.js')
declare global {
  interface Window {
    readonly BUS: Vue,
    readonly BN: any
  }
  const BUS: Vue
  const BN: any
}

Object.defineProperty(window, 'BUS', {
  // tslint:disable-next-line:new-parens
  value: new Vue(),
  enumerable: true,
  writable: false
})

Object.defineProperty(window, 'BN', {
  value: BN,
  enumerable: true,
  writable: false
})
