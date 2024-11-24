import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDrawerList from "./pages/ProductsDrawerList";
import ProductDetails from "./pages/ProductDetails";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductsDrawerList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
