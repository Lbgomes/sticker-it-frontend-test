import { HeaderContent } from "../HeaderContent/HeaderContent";
import { Container, ItensContainer, Line } from "./GroupProducts.styles";
import { HelpToChoose } from "../HelpToChoose/HelpToChoose";
export const GroupProducts = () => {
  return (
    <Container>
      <ItensContainer>
        <HeaderContent />
        <Line />
      </ItensContainer>
      <ItensContainer>
        <HeaderContent />
        <Line />
      </ItensContainer>
      <ItensContainer>
        <HeaderContent />
        <Line />
      </ItensContainer>
      <ItensContainer>
        <HelpToChoose />
      </ItensContainer>
    </Container>
  );
};
