import { Outlet } from 'react-router-dom';
import Rail from './Rail';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Rail />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
