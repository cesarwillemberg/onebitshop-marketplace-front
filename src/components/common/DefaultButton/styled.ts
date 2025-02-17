import styled from "styled-components/native";

type propsButton = {
  type: string;
};

export const ButtonCointainer = styled.TouchableOpacity`
  width: 90%;
  min-height: 40px;
  background-color: ${(props) =>
    props.type === "primary"
      ? ({ theme }) => theme.colors.primaryButton
      : ({ theme }) => theme.colors.secondaryButton};
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.marginVertical}px auto;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;
