import { HelpToChoose } from "../HelpToChoose/HelpToChoose";
import { Container, ItemContainer } from "./ChooseGroup.styles";
import { ChooseItem } from "../ChooseItem/ChooseItem";
export const ChooseGroup = () => {
  return (
    <Container>
      <ItemContainer>
        <ChooseItem />
      </ItemContainer>
      <ItemContainer>
        <ChooseItem />
      </ItemContainer>
      <ItemContainer>
        <ChooseItem />
      </ItemContainer>
      <ItemContainer>
        <ChooseItem />
      </ItemContainer>
      <ItemContainer>
        <ChooseItem />
      </ItemContainer>
    </Container>
  );
};
