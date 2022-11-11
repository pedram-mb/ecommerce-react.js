import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Store from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
