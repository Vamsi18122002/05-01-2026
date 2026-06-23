import { Provider } from 'react-redux'
import { store } from './A'
import B from './B'

function Index() {
  return (
    <Provider store={store}>
      <B />
    </Provider>
  )
}
export default Index;