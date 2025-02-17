import React from "react";
import {
  Bold,
  CompanyLogo,
  Container,
  ForgetPassword,
  Input,
  InputContainer,
  Logo,
  RegisterText,
} from "./styled";
import BackIcon from "../../components/common/BackIcon";
import DefaultButton from "../../components/common/DefaultButton";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const logo = require("../../../assets/images/logo.png");
const companyLogoImg = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    Alert.alert("Login");
  };

  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="white" />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      </InputContainer>
      <ForgetPassword>Esqueceu a senha?</ForgetPassword>

      <DefaultButton
        buttonText="Login"
        buttonType="primary"
        marginVertical={40}
        buttonHandle={() => {
          handleLogin();
        }}
      />
      <RegisterText
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Você não possui conta? <Bold>Registre-se!</Bold>
      </RegisterText>
      <CompanyLogo source={companyLogoImg} />
    </Container>
  );
};

export default Login;
