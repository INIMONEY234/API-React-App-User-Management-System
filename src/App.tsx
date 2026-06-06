import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/users" />
          }
        />
        <Route
          path="/users"
          element={<UserList />}
        />
        <Route 
          path="/users/:id" 
          element={<UserDetails />} 
        />
        <Route
          path="/add-user"
          element={<AddUser />}
        />
        <Route
          path="/edit-user/:id"
          element={<EditUser />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;