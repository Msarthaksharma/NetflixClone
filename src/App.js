import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
     <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
