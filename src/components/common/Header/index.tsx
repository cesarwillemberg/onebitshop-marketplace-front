import React from "react";
import { Contanier, Input, InputContainer, Logo, Search } from "./styled";

const logo = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search.png");
const Header = () => {
  return (
    <Contanier>
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Search" placeholderTextColor="#c0c0c1" />
        <Search source={search} />
      </InputContainer>
    </Contanier>
  );
};

export default Header;
