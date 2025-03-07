import "./index.css";
import { Helmet } from "react-helmet";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="Abdullah Malik: Portfolio" />
        <meta property="og:image" content="..\public\favicon.ico" />
        <meta property="og:url" content="https://www.abdullahmalek.com" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="A snapshot of my background and portfolio."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Malik: Portfolio</title>
      </Helmet>
      <Navbar></Navbar>

      <Intro />
      <Skills />
      {/* <ComingSoon targetDate="2024-04-03T00:00:00" /> */}

      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
