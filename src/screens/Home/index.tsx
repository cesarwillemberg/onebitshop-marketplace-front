import { View, Text } from "react-native";
import React from "react";
import { Contanier } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ProductList from "../../components/common/ProductList";

const Home = () => {
  return (
    <Contanier>
      <Header />
      <ProductList />
      <NavBar />
    </Contanier>
  );
};

export default Home;
