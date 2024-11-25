import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDrawerList from "./pages/ProductsDrawerList";
import ProductDetails from "./pages/ProductDetails";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";
import { AppStateProvider } from "./hooks/AppStateContext";

function App() {
  return (
    <>
      <AppStateProvider>
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
      </AppStateProvider>
    </>
  );
}

export default App;
