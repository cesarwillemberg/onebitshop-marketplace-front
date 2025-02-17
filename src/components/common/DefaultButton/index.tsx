import React from "react";
import { ButtonCointainer, ButtonText } from "./styled";

type props = {
  buttonText: string;
  buttonType: string;
  marginVertical: number;
  buttonHandle: Function;
};

const DefaultButton = ({
  buttonText,
  buttonType,
  marginVertical,
  buttonHandle,
}: props) => {
  return (
    <ButtonCointainer
      type={buttonType}
      marginVertical={marginVertical}
      onPress={() => {
        buttonHandle();
      }}
    >
      <ButtonText>{buttonText}</ButtonText>
    </ButtonCointainer>
  );
};

export default DefaultButton;
