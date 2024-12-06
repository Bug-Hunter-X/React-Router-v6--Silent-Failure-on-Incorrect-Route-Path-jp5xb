// correctRoute.js
import { useLocation, Navigate, Outlet } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the route path is valid
  const isValidRoute = location.pathname === '/about' || location.pathname === '/contact';

  return isValidRoute ? (
    <div>
        <h1>Correct Route</h1>
      <Outlet/>
    </div>
  ) : (
    <Navigate to="/" replace/> // Redirect to home or a 404 page
  );
}
export default App; 