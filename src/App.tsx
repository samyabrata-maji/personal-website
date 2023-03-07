import { Navbar } from "./lib/navbar/navbar";
import { PROPS_NAVBAR } from "./lib/navbar/navbar.data";

function App() {
  return (
    <>
      <Navbar links={PROPS_NAVBAR} />
    </>
  );
}

export default App;
