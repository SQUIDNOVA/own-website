import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutWrapper from "./components/Header/LayoutWrapper";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Dashbord from "./components/Admin/Dashboard/Dashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages with Nav + Footer */}
        <Route path="/*" element={<LayoutWrapper />} />

        {/* Admin pages WITHOUT Nav + Footer */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/home" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}
