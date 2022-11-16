import { Button } from "@mui/material";
import { ButtonLink } from "../ButtonLink";
import {
  Container,
  Info,
  InfoContainer,
  InfoSub,
  InfoTitle,
  Title,
} from "./HeaderContent.styles";

export const HeaderContent = () => {
  return (
    <Container>
      <Title>Teste</Title>
      <InfoContainer>
        <img
          src="https://v3-media.stickerit.co/64227/1649140504-biodegradable-sticker-product-icon.png?auto=format&w=48"
          alt=""
        />
        <Info>
          <InfoTitle>Papel biodegravel</InfoTitle>
          <InfoSub>Papel biodegravel</InfoSub>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <img
          src="https://v3-media.stickerit.co/64227/1649140504-biodegradable-sticker-product-icon.png?auto=format&w=48"
          alt=""
        />
        <Info>
          <InfoTitle>Papel biodegravel</InfoTitle>
          <InfoSub>Papel biodegravel</InfoSub>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <img
          src="https://v3-media.stickerit.co/64227/1649140504-biodegradable-sticker-product-icon.png?auto=format&w=48"
          alt=""
        />
        <Info>
          <InfoTitle>Papel biodegravel</InfoTitle>
          <InfoSub>Papel biodegravel</InfoSub>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <img
          src="https://v3-media.stickerit.co/64227/1649140504-biodegradable-sticker-product-icon.png?auto=format&w=48"
          alt=""
        />
        <Info>
          <InfoTitle>Papel biodegravel</InfoTitle>
          <InfoSub>Papel biodegravel</InfoSub>
        </Info>
      </InfoContainer>
      <ButtonLink to="" variant="outlined" color="primary">
        Learn more
      </ButtonLink>
    </Container>
  );
};
