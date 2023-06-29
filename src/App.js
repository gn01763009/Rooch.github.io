import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from 'react-router-dom';

import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Demo from "./components/Demo";
import Interview from "./components/Interview/Interview";

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
          <Footer />
          {/* <ScrollToTop scrollPosition={y}/> */}
          <ScrollToTop />
        {/* </Suspense> */}
      </ThemeProvider>
    </main>
  );
}

export default App;