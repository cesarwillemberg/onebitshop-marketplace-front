import { View, Text } from "react-native";
import React from "react";
import { Contanier } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";

const Home = () => {
  return (
    <Contanier>
      <Header />
      <NavBar />
    </Contanier>
  );
};

export default Home;
