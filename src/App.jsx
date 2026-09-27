import React, { useState } from 'react'
import { Home } from './Component/page/Home';
import { Properties } from './Component/page/Properties';
import { Services } from './Component/page/Services';
import { Blog } from './Component/page/Blog';
import { Contact } from './Component/page/Contact';
import { Aboutus } from './Component/page/About us';
import { Navbar } from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
const App = () => {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
       {page === "properties" && <Properties/>}
      {page === "aboutus" && <Aboutus/>}
      {page === "services" && <Services />}
      {page === "blog" && <Blog />}
       {page === "contact" && <Contact />}
      <Footer />
    </>
  )
}
export default App