import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Contact from './pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="locations" element={<Properties />} />
        <Route path="locations/:slug" element={<PropertyDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
