import { styled } from "@mui/material/styles";
import { theme } from "../..";

export const Container = styled("div")(() => ({
  height: "220px",
  width: "220px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "12px",
}));
export const TextContainer = styled("div")(() => ({}));

export const Title = styled("h1")(() => ({
  fontFamily: theme.default.typography.fontFamily,
  color: theme.colors.blue,
  fontWeight: 500,
  fontSize: "21px",
  margin: 0,
}));
export const SubTitle = styled("h2")(() => ({
  fontFamily: theme.default.typography.fontFamily,
  color: theme.colors.blue,
  fontWeight: 300,
  fontSize: "12px",
  margin: 0,
}));
export const ContentContainer = styled("div")(() => ({
  height: "121px",
  placeItems: "end",
  display: "flex",
  button: {
    margin: "8px",
    background: " #FFFFFFBF ",
  },
  "button:hover": {
    background: " #ffffffda ",
  },
}));

export const ImageContainer = styled("img")(() => ({
  position: "absolute",
  height: "121px",
  borderRadius: "9px",
}));
