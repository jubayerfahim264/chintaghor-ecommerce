import { createBrowserRouter } from "react-router";
import Header from "./layout/Header";
import Home from "./Pages/Home";
import { RouterProvider } from "react-router";
import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/Contact";
import BundlePage from "./Pages/Bundle";
import CataloguePage from "./Pages/Catalogue";
import Footer from "./layout/Footer";
import Shop from "./Pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: "/catalogue",
    element: <CataloguePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/bundle",
    element: <BundlePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-in",
    element: <div>Sign In Page</div>,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <div>Sign Up Page</div>,
    errorElement: <NotFound />,
  },
  {
    path: "/shop",
    element:<Shop/>
  }
]);

function App() {
  return (
    <>
      <div>
        <Header />

        <RouterProvider router={router} />
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
