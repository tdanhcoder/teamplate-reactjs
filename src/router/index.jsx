import HomePage from '#pages/Home';
import Root from '#pages/Root';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RouteContact from './contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />} />
        {RouteContact}
      </Route>
    </>,
  ),
);

export default router;
