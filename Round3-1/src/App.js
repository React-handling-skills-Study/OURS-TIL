import ProductEditor from './Product/ProductEditor'
import ProductList from './Product/ProductList'
import Reset from './utils/Reset'
import { Global } from '@emotion/react'

function App() {
  return (
    <div className="App">
      <Global styles={Reset} />
      <ProductEditor />
      <ProductList />
    </div>
  )
}

export default App
