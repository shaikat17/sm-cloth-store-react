import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  CheckRoute,
  Home,
  Products,
  SingleProduct,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<CheckRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
