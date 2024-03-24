import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SurveyOne from './components/SurveyOne';
import SurveyTwo from './components/SurveyTwo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

  },

  {
    path: '/sampleSurvey',
    element: <SurveyOne />,

  },

  {
    path: '/sensoryPreferences',
    element: <SurveyTwo />,

  },



]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App
