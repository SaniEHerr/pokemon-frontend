import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Favorites from "./pages/Favorites";
import Error404NotFound  from "./pages/Error404NotFound";

import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { syncFavorites } from "./redux/actions/actions";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    // Si no hay userName y estamos en una ruta protegida, redirigir a la landing
    if (!userName && isProtectedRoute(location.pathname)) {
      navigate("/");
    }

    if (!userId) {
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);
    }

    dispatch(syncFavorites());
  }, [dispatch, location, navigate]);

  // Función para verificar si una ruta está protegida
  const isProtectedRoute = (path) => {
    const protectedRoutes = ["/home", "/detail", "/create", "/favorites"];
    return protectedRoutes.some(route => path.startsWith(route));
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/404" element={ <Error404NotFound /> } />
        <Route path="*" element={ <Navigate to="/404" replace />} />
      </Routes>
    </div>      
  )
}

export default App



// import Landing from "./pages/Landing";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import Create from "./pages/Create";
// import Favorites from "./pages/Favorites";
// import Error404NotFound  from "./pages/Error404NotFound";

// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import { syncFavorites } from "./redux/actions/actions";
// import { useDispatch } from "react-redux";

// function App() {

//   const dispatch = useDispatch();
//   const location = useLocation();

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//       const newUserId = uuidv4();
//       localStorage.setItem('userId', newUserId);
//     }

//     dispatch(syncFavorites());
//   }, [dispatch, location]);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/404" element={ <Error404NotFound /> } />
//         <Route path="*" element={ <Navigate to="/404" replace />} />
//       </Routes>
//     </div>      
//   )
// }

// export default App