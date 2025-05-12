import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import Assurence from "../components/Assurence";
import Subcribe from "..//components/Subscribe"

const Home = () => {
  return (
    <main>
      <Hero />
      <Title
        title={"LATEST"}
        titleTwo={"COLLECTIONS"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
        }
      />
      <LatestCollection />
      <Title
        title={"BEST"}
        titleTwo={"SELLERS"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
        }
      />
      <BestSellers />
      <Assurence />
      <Subcribe />
    </main>
  );
};

export default Home;
