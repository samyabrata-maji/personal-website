import { Box, MantineTheme, SimpleGrid, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import { getBlogs } from "./blog.controller";
import Heading from "../Heading/heading";
import { BlogProps } from "./blog.types";
import BlogCard from "./blog_card";
import { CSSObject } from "@emotion/react";

const useStyles = createStyles((theme: MantineTheme) => ({
  simple_grid: {
    // [`@media (max-width: ${theme.breakpoints.sm})`]: {
    //   gridTemplateColumns: '1fr',
    // },
  },
}));

export default function BlogSection() {
  const { classes } = useStyles();

  const [blogs, setBlogs] = useState(() => []);
  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <Box mt={"2.5%"}>
        <Heading>Blogs</Heading>
        <SimpleGrid
          className={classes.simple_grid}
          cols={4}
          spacing="xl"
          mt={50}
          mx={"2.5%"}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 },
          ]}
        >
          {blogs.map((data: BlogProps, index) => {
            return <BlogCard key={index} data={data} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
