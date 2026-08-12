import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'

const AppRoute = () => {
  return useRoutes(routes);
}
export default AppRoute