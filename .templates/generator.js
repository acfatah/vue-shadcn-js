import storeGenerator from './store/index.js'

export default function (plop) {
  plop.setGenerator('store', storeGenerator)
}
