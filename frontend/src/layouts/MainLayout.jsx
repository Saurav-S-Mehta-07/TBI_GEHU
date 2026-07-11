import { Outlet } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/chatbot/Chatbot';

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default MainLayout;