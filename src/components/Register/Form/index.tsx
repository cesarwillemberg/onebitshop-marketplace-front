import React, { useState } from "react";
import { Input, InputContainer, InputMask } from "./styled";

const Form = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <InputContainer>
        <Input placeholder="Nome completo" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <InputMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) 9 ",
          }}
          placeholder="(99) 9 9999-9999"
          placeholderTextColor="#C0C0C1"
          value={phone}
          onChangeText={(phone) => {
            setPhone(phone);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#C0C0C1"
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirme sua senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry={true}
        />
      </InputContainer>
    </>
  );
};

export default Form;
