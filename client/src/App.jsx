import { Header } from "./components/header";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./screens/home";
import { AnimeLists } from "./screens/animeList";
import { PopularAnime } from "./screens/myPopular";
import { Footer } from "./components/footer";
import { AdminPage } from "./screens/adminAuth/adminPage";
import { AuthenticationAdmin } from "./screens/adminAuth/auth";
import React from "react";
import { ProtectedRoute } from "./screens/adminAuth/protectedRoute";

import { Toaster } from "react-hot-toast";

import { UserProvider } from "../context/userContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/adminAuth" element={<AuthenticationAdmin />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminPage />} />}
        />
        <Route
          element={
            <div className="bg-primary-default font-alex container mx-auto">
              <Header />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/animeList" element={<AnimeLists />} />
          <Route path="/myPopular" element={<PopularAnime />} />
        </Route>
      </Routes>

      <Toaster position="top-right" reverseOrder={false} gutter={8} />
    </UserProvider>
  );
}

export default App;
