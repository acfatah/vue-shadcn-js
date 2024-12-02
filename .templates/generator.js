import storeGenerator from './store/index.js'
import storyGenerator from './stories/index.js'

export default function (plop) {
  plop.setHelper('orValues', (...values) => values.find(value => value))

  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('story', storyGenerator)
}
