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
import Cart from "./Pages/Shop/Cart";
import { useEffect, useState } from "react";
import Checkout from "./Pages/Shop/Checkout";
// import ModalComponent from "./Pages/Shop/Modal";

function App() {
  const [addToCart, setAddToCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const handleAddCart = (cartAdded) => {
    // Check if the item is already in the cart
    const existingItem = addToCart.find((item) => item.id === cartAdded.id);
    if (existingItem) {
      // If it exists, update the quantity
      setAddToCart((prev) =>
        prev.map((item) =>
          item.id === cartAdded.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      // If it doesn't exist, add it to the cart with qty: 1
      setAddToCart((prev) => [...prev, { ...cartAdded, qty: 1 }]);
    }
  };;

  const handleRemove = (id) => {
    setAddToCart((prev) => prev.filter((item) => item.id !== id));
  };

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
      element: <Shop handleAddCart={handleAddCart} />,
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
      path: "/cart",
      element: <Cart addToCart={addToCart} handleRemove={handleRemove} />,
      errorElement: <NotFound />,
    },
    {
      path: "/checkout",
      element: <Checkout addToCart={addToCart} handleRemove={handleRemove} />,
      errorElement: <NotFound />,
    },
    // {
    //   path: "/modal",
    //   element: <ModalComponent />,
    //   errorElement: <NotFound />,
    // },
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addToCart));
  }, [addToCart]);
  return (
    <>
      <div>
        <Header addToCart={addToCart.length} />

        <RouterProvider router={router} />
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
