import { ButtonLink } from "../ButtonLink";
import {
  Container,
  ContentContainer,
  ImageContainer,
  Title,
} from "./HelpToChoose.styles";

export const HelpToChoose = () => {
  return (
    <Container>
      <Title>Help me choose</Title>
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
