import { createStore } from 'redux'
import reducers from '../reducers/reducer'

export default function configureStore () {
  return createStore(reducers)
}