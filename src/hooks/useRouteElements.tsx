import { useRoutes } from 'react-router-dom'
import ProduceList from '../pages/ProduceList'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterLayout from '../layouts/RegisterLayout'

export const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProduceList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
