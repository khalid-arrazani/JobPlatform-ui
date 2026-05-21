import "./App.css";
import AuthPage1 from "./pages/AuthPage1.jsx";
import DashboardLayout from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage";
import CompleteProfile from "./pages/CompleteProfilePage";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<Routes>
      <Route
        path="/"
        element={<DashboardLayout />}
      />

      <Route
        path="/profile"
        element={<ProfilePage />}
      />
    </Routes>
  );
}

export default App;
