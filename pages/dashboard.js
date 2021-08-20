import { Grid, Box } from "@chakra-ui/react";
import Head from "next/head";
import ShowcaseCard from "../components/Cards/Showcase";
import Menu from "../components/Menu";

import SampleItems from "../mock/items";

const Dashboard = () => (
  <>
    <Head>
      <title>Dashboard | MusicMakes</title>
    </Head>
    <Grid
      templateColumns={{ base: "auto", md: "250px auto 250px" }}
      templateRows={{ base: "100px auto 100px", md: "1fr" }}
      h="100vh"
    >
      <Box>
        <Menu />
      </Box>
      <Box bg="blue.500" p="2">
        <Grid templateColumns={{ base: "auto", md: "repeat(3, 1fr)" }} gap="2">
          {SampleItems.map((item) => (
            <ShowcaseCard {...item} />
          ))}
        </Grid>
      </Box>
      <Box bg="red.500"></Box>
    </Grid>
  </>
);

export default Dashboard;
