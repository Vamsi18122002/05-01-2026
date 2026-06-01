import { Provider } from 'react-redux'
import { store } from './Store'
import A from './A'

function Index() {
  return (
    <Provider store={store}>
      <A />
    </Provider>
  )
}

export default Index;