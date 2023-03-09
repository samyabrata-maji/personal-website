import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import About from "./lib/about_section/about";
import BlogSection from "./lib/blog_section/blog_section";
import { Footer } from "./lib/footer/footer";
import { FOOTER_DATA } from "./lib/footer/footer.data";
import { Navbar } from "./lib/navbar/navbar";
import { PROPS_NAVBAR } from "./lib/navbar/navbar.data";
import ProjectSection from "./lib/project_section/project_section";
import { useState } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: colorScheme }}
      >
        <Navbar links={PROPS_NAVBAR} />
        <About />
        <BlogSection />
        <ProjectSection />
        <Footer data={FOOTER_DATA} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
