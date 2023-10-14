import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Route1 from './pages/Route1.tsx';
import Route2 from './pages/Route2.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/test',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'route1', element: <Route1 /> },
      { path: 'route2', element: <Route2 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
