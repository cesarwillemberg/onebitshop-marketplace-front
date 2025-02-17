import React from "react";
import { AcceptTerms, CompanyLogo, Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { Bold } from "../Login/styled";

const companyLogoImg = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container contentContainerStyle={{ paddingBottom: 60 }}>
      <BackIcon marginLeft={20} />
      <Title>CRIE SUA CONTA!</Title>
      <Form />
      <DefaultButton
        buttonText="Registrar-se"
        buttonType="primary"
        marginVertical={30}
        buttonHandle={() => {}}
      />
      <AcceptTerms>
        Ao registrar-se aceito {"\n"} os{" "}
        <Bold>Termos de politica e privacidade</Bold>
      </AcceptTerms>
      <DefaultButton
        buttonText="Fazer login"
        buttonType="secondary"
        marginVertical={30}
        buttonHandle={() => {
          handleLogin();
        }}
      />
      <CompanyLogo source={companyLogoImg} />
    </Container>
  );
};

export default Register;
