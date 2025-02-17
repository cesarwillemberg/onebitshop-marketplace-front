import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { BackContainer, BackIconImg } from "./styled";

type props = {
  marginLeft: number;
};

const back = require("../../../../assets/icons/arrow-left.png");

const BackIcon = ({ marginLeft }: props) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <BackContainer onPress={() => navigation.goBack()}>
      <BackIconImg marginLeft={marginLeft} source={back} />
    </BackContainer>
  );
};

export default BackIcon;
