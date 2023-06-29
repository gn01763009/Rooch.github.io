import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Upload from "./components/Upload";
import List from "./components/List";
import Avatar from "./components/Avatar";
import Interview from "./components/Interview";
import Report from "./components/Report";

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Suspense fallback={<Loading />}> */}
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/interview" element={<Section><Interview /></Section>} />
            <Route path="/upload" element={<Section><Container><Upload /></Container></Section>} />
            <Route path="/list" element={<Section><Container><List /></Container></Section>} />
            <Route path="/avatar" element={<Section><Container><Avatar /></Container></Section>} />
            <Route path="/report" element={<Section><Container><Report /></Container></Section>} />
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