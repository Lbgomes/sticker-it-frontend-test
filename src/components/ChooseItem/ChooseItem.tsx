import { ButtonLink } from "../ButtonLink";
import {
  Container,
  ContentContainer,
  ImageContainer,
  SubTitle,
  TextContainer,
  Title,
} from "./ChooseItem.styles";

export const ChooseItem = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Help me choose</Title>
        <SubTitle>Help you choose in minutes for free</SubTitle>
      </TextContainer>
      <ContentContainer>
        <ImageContainer src="https://v3-media.stickerit.co/64227/1658308048-assorted-stickers-applied-to-a-wall.jpeg?auto=format&w=230" />
        <ButtonLink
          to=""
          variant="outlined"
          color="primary"
          displayWidth="full width"
        >
          Learn more
        </ButtonLink>
      </ContentContainer>
    </Container>
  );
};
