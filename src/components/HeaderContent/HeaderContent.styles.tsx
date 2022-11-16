import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  fontFamily: theme.default.typography.fontFamily,
  color: theme.colors.blue,
  fontWeight: 500,
  gap: "20px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "270px",
}));

export const Content = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));

export const Title = styled("h1")(() => ({
  fontSize: "21px",
  fontWeight: 500,
  margin: 0,
}));

export const InfoContainer = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));

export const Info = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const InfoTitle = styled("h2")(() => ({
  fontSize: "16px",
  fontWeight: 500,

  margin: 0,
}));

export const InfoSub = styled("h3")(() => ({
  fontSize: "12px",
  fontWeight: 300,
  margin: 0,
}));
