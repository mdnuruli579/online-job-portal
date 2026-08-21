import React,{Suspense} from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'
import PageLoader from './common/PageLoader';

const AppRoute = () => {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<PageLoader />}>
      {element}
    </Suspense>
  );
}
export default AppRoute