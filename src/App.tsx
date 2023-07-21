import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Router from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

import { store } from './store'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
