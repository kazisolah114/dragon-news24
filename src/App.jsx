import { RouterProvider } from 'react-router-dom'
import router from './Router/Route'
import AuthProvider from './Provider/AuthProvider'

function App() {

  return (<AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>)

}

export default App
