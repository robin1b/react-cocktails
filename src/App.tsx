import Home from "./pages/Home";
import Products from "./pages/Cocktails";
// import ProductDetail from "./pages/CocktailDetail";
import About from "./pages/About";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:id/:slug" element={<ProductDetail />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
};
export default App;
