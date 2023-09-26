import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import "./styles.css";

function App() {
  console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
