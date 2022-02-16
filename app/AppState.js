import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  value = []
  snacks = [new Snack("Doritos", "https://m.media-amazon.com/images/I/81-DyMXy6tL._SX679_PIbundle-64,TopRight,0,0_AA679SH20_.jpg", 2.75), new Snack("Cheetos", "https://www.kroger.com/product/images/large/front/0002840058987", 3.25)]
  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


