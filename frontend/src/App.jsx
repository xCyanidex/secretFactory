
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth";
import Navbar from "./components/Navbar";
import Secrets from "./pages/Secrets";
import SecretDetail from "./pages/SecretDetail";
import AddSecret from "./pages/AddSecret";



function App() {

const NavLayout = ({ children }) => (
  <>
    <Navbar />
      {children}
  </>
);

  return (
    <>
 
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Auth />} />
            <Route
              path="/secrets"
              element={
                <NavLayout>
                  <Secrets />
                </NavLayout>
              }
            />
            <Route
              path="/secrets/:id"
              element={
                <NavLayout>
                  <SecretDetail />
                </NavLayout>
              }
            />
            <Route
              path="/add-secret"
              element={
                <NavLayout>
                  <AddSecret />
                </NavLayout>
              }
            />
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App
