
// import About from './About';
// import './App.css';
// import Contact from './Contact';
// import Footer from './Footer';
// import Home from './Home';
// import Product from './Product';
// function App() {
//   return (
//     <>
//     <Home/>
//     {/* <Contact/> */}
//     {/* <About/> */}
//     {/* <Product/>
//     <Footer/> */}
//     </>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Product from './Product';
import Export from './Export';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/export" element={<Export />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;