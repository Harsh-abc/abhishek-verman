import Home from "./components/core/Home";
import About from "./components/core/About";
import PageTransition from "./components/common/PageTransition";
import MoodBoard from "./components/core/MoodBoard";
import Navbar from "./components/core/Navbar";

function App() {
  return (
    <>
      {/* <PageTransition /> */}
      <Navbar />
      <Home />
      {/* <MoodBoard /> */}

    </>
  );
}

export default App;