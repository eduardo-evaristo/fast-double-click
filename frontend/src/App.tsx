import { createBrowserRouter, RouterProvider } from "react-router";
import ButtonPage from "./pages/ButtonPage";
import EntriesPage, { loader as entriesLoader } from "./pages/EntriesPage";

const router = createBrowserRouter([
  { path: "/", Component: ButtonPage },
  {
    path: "/registros",
    Component: EntriesPage,
    loader: entriesLoader,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
