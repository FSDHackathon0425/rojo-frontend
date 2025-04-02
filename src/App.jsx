import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { OrdersPage } from './pages/OrdersPage'
import { MenusPage } from './pages/MenusPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/menus' element={<MenusPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
