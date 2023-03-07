import About from "./lib/about_section/about";
import BlogSection from "./lib/blog_section/blog_section";
import { Navbar } from "./lib/navbar/navbar";
import { PROPS_NAVBAR } from "./lib/navbar/navbar.data";
import ProjectSection from "./lib/project_section/project_section";

function App() {
  return (
    <>
      <Navbar links={PROPS_NAVBAR} />
      <About />
      <BlogSection />
      <ProjectSection />
    </>
  );
}

export default App;
