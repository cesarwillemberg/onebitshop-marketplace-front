import React from "react";
import { Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import Form from "../../components/Register/Form";

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container>
      <BackIcon marginLeft={20} />
      <Title>CRIE SUA CONTA!</Title>
      <Form />
    </Container>
  );
};

export default Register;
