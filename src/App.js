import React, { useContext } from "react";
import Home from "./pages/home/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import ProductList from "./components/table/Table";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={userInputs} title={"Add New User"} />}
        />
      </Route>

      <Route path="products">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={productInputs} title={"Add New Product"} />}
        />
      </Route>
    </Route>
  )
);

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
