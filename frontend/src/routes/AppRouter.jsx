import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import Startups from '../pages/Startups/Startups';
import Mentors from '../pages/Mentors/Mentors';
import Events from '../pages/Events/Events';
import Resources from '../pages/Resources/Resources';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programs', element: <Programs /> },
      { path: 'startups', element: <Startups /> },
      { path: 'mentors', element: <Mentors /> },
      { path: 'events', element: <Events /> },
      { path: 'resources', element: <Resources /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;