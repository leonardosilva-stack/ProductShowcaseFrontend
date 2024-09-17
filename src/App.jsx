import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsAppButton/whatsAppButton";

const App = () => {
  return (
    <BrowserRouter basename="/concepts/hotsite/v1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
