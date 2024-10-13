import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { OurCompany } from "./pages/OurCompany";
import { Location } from "./pages/Location";
import { Contact } from "./pages/Contact";
import { Javascript } from "./pages/Javascript";
import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ReactJs } from "./pages/ReactJs";
import { AngularJs } from "./pages/AngularJs";

function App() {
  return (
    <div className="font-jost text-dark-gray">
      <Header />
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="about" element={<OurCompany />} />
        <Route path="locations" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="reactjs" element={<ReactJs />} />
        <Route path="angularjs" element={<AngularJs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
