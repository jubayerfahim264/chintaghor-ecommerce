import { createBrowserRouter } from "react-router";
import Header from "./layout/Header";
import Home from "./Pages/Home/Home";
import { RouterProvider } from "react-router";
import NotFound from "./Pages/404/NotFound";
import ContactPage from "./Pages/Contact/Contact";
import BundlePage from "./Pages/Bundle/Bundle";
import CataloguePage from "./Pages/Categories/Catalogue";
import Footer from "./layout/Footer";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import BlogDeatails from "./Pages/Blog/BlogDeatails/BlogDeatails";

const router = createBrowserRouter([
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
    path: "/shop",
    element: <Shop />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFound />,
  },
  {
    path: "/blog/:id",
    element: <BlogDeatails />,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-in",
    element: <div>Sign In Page</div>,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
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
