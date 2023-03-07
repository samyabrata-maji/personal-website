import About from "./lib/about/about";
import { Navbar } from "./lib/navbar/navbar";
import { PROPS_NAVBAR } from "./lib/navbar/navbar.data";

function App() {
  return (
    <>
      <Navbar links={PROPS_NAVBAR} />
      <About />
    </>
  );
}

export default App;
