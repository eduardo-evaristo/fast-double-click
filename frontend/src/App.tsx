import { createBrowserRouter, RouterProvider } from "react-router";
import ButtonPage from "./pages/ButtonPage";
import EntriesPage from "./pages/EntriesPage";

const router = createBrowserRouter([
  { path: "/", Component: ButtonPage },
  { path: "/registros", Component: EntriesPage },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
