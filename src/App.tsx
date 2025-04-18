import './styles/main.sass'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { ListLogs } from './pages/ListLogs/ListLogs'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <DefaultLayout /> }>
        <Route index element={ <Home /> } />
        <Route path='logs' element={ <ListLogs /> } />
      </Route>
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
  )
}

export default App
