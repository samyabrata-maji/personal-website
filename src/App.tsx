import About from "./lib/about_section/about";
import BlogSection from "./lib/blog_section/blog_section";
import { Navbar } from "./lib/navbar/navbar";
import { PROPS_NAVBAR } from "./lib/navbar/navbar.data";

function App() {
  return (
    <>
      <Navbar links={PROPS_NAVBAR} />
      <About />
      <BlogSection/>
    </>
  );
}

export default App;
