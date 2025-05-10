
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './pages/home/page';
import About from './pages/aboutUs/Page';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
  ]);

  return routes;
}

export default function Root() {
  return (
    
    <Router>
         <link
      href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap"
      rel="stylesheet"
    />
   
      <App />
    </Router>
  );
}
