import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Shell from "./components/Shell";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/attributs" element={<Knowledges />} />
          <Route path="/carriere" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competences" element={<Navigate to="/attributs" replace />} />
          <Route path="/portfolio" element={<Navigate to="/carriere" replace />} />
          <Route path="/portFolio" element={<Navigate to="/carriere" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
