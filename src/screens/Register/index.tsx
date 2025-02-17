import React from "react";
import { Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container>
      <BackIcon marginLeft={20} />
      <Title>CRIE SUA CONTA!</Title>
    </Container>
  );
};

export default Register;
