import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { OurCompany } from "./pages/OurCompany";
import { Contact } from "./pages/Contact";

import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Javascript } from "./pages/Javascript";
import { ReactJs } from "./pages/ReactJs";
import { Angular } from "./pages/Angular";

function App() {
  return (
    <div className="font-jost text-dark-gray">
      <Header />
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<OurCompany />} />
        <Route path="contact" element={<Contact />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="reactjs" element={<ReactJs />} />
        <Route path="angular" element={<Angular />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
