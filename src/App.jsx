import { useRoutes } from 'react-router-dom'
import Production from './screens/Production'
import News from './screens/News'
import MainPage from './pages/MainPage'

function App() {

  const Router = useRoutes([
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/production',
        element: <Production/>
      },
      {
        path: '/news',
        element: <News/>
      }
  ])

  return Router
}

export default App
